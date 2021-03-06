# ng-extensions
Basic implementation of dynamic extension loading concept using Angular.

## Building extension
----------------------
```
cd extension
npm i
npm run build
```
### How extension is built ?
extension project is built using ngc (with skipTemplateCodegen set to 'false') + RollupJs, and generates bundled JavaScript file in UMD format.
This UMD is then loaded by platform application at runtime, using Angular lazy loaded modules concept. All the dependencies are provided using global variables.
For list of dependencies (provided as global variables) see 'platform/system.modules.json'.
To see how RollupJs uses '**platform/system.modules.json**', see '**extension/rollup.config.js**'

## Running (platform) application
---------------------------------
```
cd platform
npm i
npm start
open browser and navigate to http://localhost:4200
```

### How (platform) application loads extensions ?
This is a regular angular application, with bit of additional implementation to allow lazy loading of extensions (UMD JavaScript).
Below sections explain different aspects of the same

#### Exported dependencies (as global variables)
All dependencies (Angular modules) needed by extensions are made available to them using global variables. All of these global variables are prepared by 'exportSystemModules' function, which can be seen in 'platform/src/app/extensions/system-modules.ts'.

```
...
export function exportSystemModules(aInjector: Injector, aExtInfoService: ExtensionInfoService): void {
  SYSTEM_MODULES.forEach((aValue: any, aKey: string) => {
    window[aKey] = aValue;
  });
  aExtInfoService.updateRouterConfig(aInjector.get(Router));
}
...
```

This function is executed through 'APP_INITIALIZER' factory function, which can be seen in 'platform/src/app/extensions/extensions.module.ts'

```
...
export function systemModuleInitializer(aInjector: Injector, aExtInfoService: ExtensionInfoService) {
  return () => exportSystemModules(aInjector, aExtInfoService);
}
...

```

#### How extensions are loaded ?
Angular allows us to use 'loadChildren' property with URL to the module to be loaded lazily. This implementation uses this concept with small customzation to it.

Regular URL we provided to 'loadChildren' property looks like '<relative path to the Angular module>#<Angular module name>; extension loading implementation uses a slight variant of this URL and it looks like '<any route path>#<Angular module name>#<isBundle>'.
Apart from the above custom URL, implementation uses custom 'NgModuleFactoryLoader'; implementation of which can be seen at 'platform/src/app/extensions/extension-loader.ts'.
  
```
private loadModuleFactory(aPath: string): Promise<NgModuleFactory<any>> {
   let [modulePath, exportName, isBundle] = aPath.split(_SEPARATOR);

   let factoryClassSuffix = FACTORY_CLASS_SUFFIX;
   if (exportName === undefined) {
     exportName = 'default';
     factoryClassSuffix = '';
   }

   if (!isBundle) {
     return super.load(aPath);
   }
   ...
}
```

Implementation extends Angular's 'SystemJsNgModuleLoader' and overrides 'load(path: string): Promise' method and checks for above custom URL pattern and if it is, then uses custom implementation to create 'script' tag for the UMD Js resouce URL (impl. of which can be seen in 'doImportScript' function in 'extension-loader.ts').
  
```
@Injectable({
  providedIn: 'root',
})
export class ExtensionLoader extends SystemJsNgModuleLoader {
....
  public load(aPath: string): Promise<NgModuleFactory<any>> {
    return this.loadModuleFactory(aPath);
  }
...
}
...
function doImportScript(aUrl: string, aNgModuleName: string, aResolve: Function, aReject: Function): Promise<any> {
  if (document.getElementById(aNgModuleName)) {
    return aResolve(window[aNgModuleName]);
  }

  // load given umd module script
  const script = document.createElement('script');
  script.id = aNgModuleName;
  script.src = aUrl;

  script.onload = function(aEvent: Event) {
    aResolve(window[aNgModuleName]);
  };

  script.onerror = function(aEvent: ErrorEvent) {
    aReject(aEvent.error);
  };

  document.head.appendChild(script);
}
```

This way Angular module initialization including loading child routes is taken care by Angular itself.

One catch here is, all extensions routes are not provided statically in code, but configured at runtime when app is being initialized; this implementation can be seen in '**updateRouterConfig**' method of 'ExtensionInfoService' service (**platform/src/app/extensions/extension-info.service.ts**).

```
@Injectable({
  providedIn: 'root',
})
export class ExtensionInfoService {
  private extensions: Map<string, IExtension> = new Map();

  constructor() {
    this.register({
      ngModuleName: 'SampleExtModule', // used as unique key
      routePath: 'sample-ext', // used in routerLink
      url: '/assets/sample-ext.module.umd.js#SampleExtModule#bundle', // used to load the UMD JavaScript itself
    });
  }
...
  public updateRouterConfig(aRouter: Router): void {
    let newRoutes = [...aRouter.config];
    this.extensions.forEach((aExtension) => newRoutes.push({ path: aExtension.routePath, loadChildren: aExtension.url }));
    aRouter.resetConfig(newRoutes);
  }
...
}
```

## Know issues
1. When the extension module 'SampleExtModule' imports 'AnotherModule' with 'entryComponents'; generated UMD contains factories for all these entry components. **You can see this in platform/assets/sample-ext.module.umd.js**
2. Component factories for entryComponents in the generated UMD for extension means all thier styles are also included. If you are using SCSS and platform also shared SCSS framework to other extensions, each change in platform styles needs possible re-build of extensions.
3. More ???
