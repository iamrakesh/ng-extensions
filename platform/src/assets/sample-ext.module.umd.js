(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/tooltip'), require('@angular/cdk/bidi'), require('@angular/material/core'), require('@angular/platform-browser'), require('@angular/cdk/platform'), require('@angular/platform-browser/animations'), require('@angular/cdk/a11y'), require('@angular/cdk/overlay'), require('@angular/cdk/scrolling'), require('@angular/cdk/observers'), require('@angular/cdk/portal'), require('@angular/cdk/layout')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/router', '@angular/common', '@angular/material/button', '@angular/material/icon', '@angular/material/tooltip', '@angular/cdk/bidi', '@angular/material/core', '@angular/platform-browser', '@angular/cdk/platform', '@angular/platform-browser/animations', '@angular/cdk/a11y', '@angular/cdk/overlay', '@angular/cdk/scrolling', '@angular/cdk/observers', '@angular/cdk/portal', '@angular/cdk/layout'], factory) :
    (factory((global.SampleExtModule = {}),global.ngCore,global.ngRouter,global.ngCommon,global.ngMaterialButton,global.ngMaterialIcon,global.ngMaterialTooltip,global.ngCdkBidi,global.ngMaterialCore,global.ngPlatformBrowser,global.ngCdkPlatform,global.ngPlatformBrowserAnimations,global.ngCdkA11y,global.ngCdkOverlay,global.ngCdkScrolling,global.ngCdkObservers,global.ngCdkPortal,global.ngCdkLayout));
}(this, (function (exports,i0,i1,i2,i1$1,i1$2,i1$3,i8,i4,i10,i6,i7,i4$1,i7$1,i19,i6$1,i18,i12) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var OneComponent = /** @class */ (function () {
        function OneComponent() {
        }
        OneComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'one',
                        template: "\n    <h3>\n      Component ONE works\n      <button mat-raised-button type=\"button\" [matTooltip]=\"'I am a button from extension'\">\n        <mat-icon>extension</mat-icon> Mouse over for tooltip\n      </button>\n    </h3>\n  "
                    }] }
        ];
        return OneComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ROUTES = [
        {
            path: '',
            component: OneComponent,
        },
    ];
    var SampleExtRoutingModule = /** @class */ (function () {
        function SampleExtRoutingModule() {
        }
        SampleExtRoutingModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [i1.RouterModule.forChild(ROUTES)],
                        exports: [i1.RouterModule],
                    },] }
        ];
        return SampleExtRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SampleExtModule = /** @class */ (function () {
        function SampleExtModule() {
        }
        SampleExtModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [OneComponent],
                        imports: [i2.CommonModule, SampleExtRoutingModule, i1$1.MatButtonModule, i1$2.MatIconModule, i1$3.MatTooltipModule],
                        providers: [],
                    },] }
        ];
        return SampleExtModule;
    }());

    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */ 
    var RouterModuleNgFactory = i0.ɵcmf(i1.RouterModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [ɵEmptyOutletComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(1073742336, i1.RouterModule, i1.RouterModule, [[2, i1.ɵangular_packages_router_router_a], [2, i1.Router]])]); });
    var styles_ɵEmptyOutletComponent = [];
    var RenderType_ɵEmptyOutletComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ɵEmptyOutletComponent, data: {} });
    function View_ɵEmptyOutletComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i0.ɵdid(1, 212992, null, 0, i1.RouterOutlet, [i1.ChildrenOutletContexts, i0.ViewContainerRef, i0.ComponentFactoryResolver, [8, null], i0.ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
    function View_ɵEmptyOutletComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵEmptyOutletComponent_0, RenderType_ɵEmptyOutletComponent)), i0.ɵdid(1, 49152, null, 0, i1.ɵEmptyOutletComponent, [], null, null)], null, null); }
    var ɵEmptyOutletComponentNgFactory = i0.ɵccf("ng-component", i1.ɵEmptyOutletComponent, View_ɵEmptyOutletComponent_Host_0, {}, {}, []);

    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */ 
    var MatButtonModuleNgFactory = i0.ɵcmf(i1$1.MatButtonModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i8.BidiModule, i8.BidiModule, []), i0.ɵmpd(1073742336, i4.MatCommonModule, i4.MatCommonModule, [[2, i4.MATERIAL_SANITY_CHECKS], [2, i10.HAMMER_LOADER]]), i0.ɵmpd(1073742336, i6.PlatformModule, i6.PlatformModule, []), i0.ɵmpd(1073742336, i4.MatRippleModule, i4.MatRippleModule, []), i0.ɵmpd(1073742336, i1$1.MatButtonModule, i1$1.MatButtonModule, [])]); });
    var styles_MatButton = [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-focus-overlay{border-radius:inherit;opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media screen and (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:rgba(255,255,255,.5)}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media screen and (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"];
    var RenderType_MatButton = i0.ɵcrt({ encapsulation: 2, styles: styles_MatButton, data: {} });
    function View_MatButton_0(_l) { return i0.ɵvid(2, [i0.ɵqud(402653184, 1, { ripple: 0 }), (_l()(), i0.ɵeld(1, 0, null, null, 1, "span", [["class", "mat-button-wrapper"]], null, null, null, null, null)), i0.ɵncd(null, 0), (_l()(), i0.ɵeld(3, 0, null, null, 1, "div", [["class", "mat-button-ripple mat-ripple"], ["matRipple", ""]], [[2, "mat-button-ripple-round", null], [2, "mat-ripple-unbounded", null]], null, null, null, null)), i0.ɵdid(4, 212992, [[1, 4]], 0, i4.MatRipple, [i0.ElementRef, i0.NgZone, i6.Platform, [2, i4.MAT_RIPPLE_GLOBAL_OPTIONS], [2, i7.ANIMATION_MODULE_TYPE]], { centered: [0, "centered"], disabled: [1, "disabled"], trigger: [2, "trigger"] }, null), (_l()(), i0.ɵeld(5, 0, null, null, 0, "div", [["class", "mat-button-focus-overlay"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.isIconButton; var currVal_3 = _co._isRippleDisabled(); var currVal_4 = _co._getHostElement(); _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.isRoundButton || _co.isIconButton); var currVal_1 = i0.ɵnov(_v, 4).unbounded; _ck(_v, 3, 0, currVal_0, currVal_1); }); }
    function View_MatButton_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "button", [["mat-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, View_MatButton_0, RenderType_MatButton)), i0.ɵdid(1, 180224, null, 0, i1$1.MatButton, [i0.ElementRef, i6.Platform, i4$1.FocusMonitor, [2, i7.ANIMATION_MODULE_TYPE]], null, null)], null, function (_ck, _v) { var currVal_0 = (i0.ɵnov(_v, 1).disabled || null); var currVal_1 = (i0.ɵnov(_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    var MatButtonNgFactory = i0.ɵccf("button[mat-button], button[mat-raised-button], button[mat-icon-button],\n             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],\n             button[mat-flat-button]", i1$1.MatButton, View_MatButton_Host_0, { disabled: "disabled", disableRipple: "disableRipple", color: "color" }, {}, ["*"]);
    var styles_MatAnchor = [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-focus-overlay{border-radius:inherit;opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media screen and (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:rgba(255,255,255,.5)}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media screen and (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"];
    var RenderType_MatAnchor = i0.ɵcrt({ encapsulation: 2, styles: styles_MatAnchor, data: {} });
    function View_MatAnchor_0(_l) { return i0.ɵvid(2, [i0.ɵqud(402653184, 1, { ripple: 0 }), (_l()(), i0.ɵeld(1, 0, null, null, 1, "span", [["class", "mat-button-wrapper"]], null, null, null, null, null)), i0.ɵncd(null, 0), (_l()(), i0.ɵeld(3, 0, null, null, 1, "div", [["class", "mat-button-ripple mat-ripple"], ["matRipple", ""]], [[2, "mat-button-ripple-round", null], [2, "mat-ripple-unbounded", null]], null, null, null, null)), i0.ɵdid(4, 212992, [[1, 4]], 0, i4.MatRipple, [i0.ElementRef, i0.NgZone, i6.Platform, [2, i4.MAT_RIPPLE_GLOBAL_OPTIONS], [2, i7.ANIMATION_MODULE_TYPE]], { centered: [0, "centered"], disabled: [1, "disabled"], trigger: [2, "trigger"] }, null), (_l()(), i0.ɵeld(5, 0, null, null, 0, "div", [["class", "mat-button-focus-overlay"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.isIconButton; var currVal_3 = _co._isRippleDisabled(); var currVal_4 = _co._getHostElement(); _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.isRoundButton || _co.isIconButton); var currVal_1 = i0.ɵnov(_v, 4).unbounded; _ck(_v, 3, 0, currVal_0, currVal_1); }); }
    function View_MatAnchor_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "a", [["mat-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
            var pd_0 = (i0.ɵnov(_v, 1)._haltDisabledEvents($event) !== false);
            ad = (pd_0 && ad);
        } return ad; }, View_MatAnchor_0, RenderType_MatAnchor)), i0.ɵdid(1, 180224, null, 0, i1$1.MatAnchor, [i6.Platform, i4$1.FocusMonitor, i0.ElementRef, [2, i7.ANIMATION_MODULE_TYPE]], null, null)], null, function (_ck, _v) { var currVal_0 = (i0.ɵnov(_v, 1).disabled ? (0 - 1) : (i0.ɵnov(_v, 1).tabIndex || 0)); var currVal_1 = (i0.ɵnov(_v, 1).disabled || null); var currVal_2 = i0.ɵnov(_v, 1).disabled.toString(); var currVal_3 = (i0.ɵnov(_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
    var MatAnchorNgFactory = i0.ɵccf("a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],\n             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]", i1$1.MatAnchor, View_MatAnchor_Host_0, { disabled: "disabled", disableRipple: "disableRipple", color: "color", tabIndex: "tabIndex" }, {}, ["*"]);

    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */ 
    var MatIconModuleNgFactory = i0.ɵcmf(i1$2.MatIconModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(1073742336, i8.BidiModule, i8.BidiModule, []), i0.ɵmpd(1073742336, i4.MatCommonModule, i4.MatCommonModule, [[2, i4.MATERIAL_SANITY_CHECKS], [2, i10.HAMMER_LOADER]]), i0.ɵmpd(1073742336, i1$2.MatIconModule, i1$2.MatIconModule, [])]); });
    var styles_MatIcon = [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1,1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"];
    var RenderType_MatIcon = i0.ɵcrt({ encapsulation: 2, styles: styles_MatIcon, data: {} });
    function View_MatIcon_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    function View_MatIcon_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, View_MatIcon_0, RenderType_MatIcon)), i0.ɵdid(1, 9158656, null, 0, i1$2.MatIcon, [i0.ElementRef, i1$2.MatIconRegistry, [8, null], [2, i1$2.MAT_ICON_LOCATION]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).inline; _ck(_v, 0, 0, currVal_0); }); }
    var MatIconNgFactory = i0.ɵccf("mat-icon", i1$2.MatIcon, View_MatIcon_Host_0, { color: "color", inline: "inline", svgIcon: "svgIcon", fontSet: "fontSet", fontIcon: "fontIcon" }, {}, ["*"]);

    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */ 
    var styles_OneComponent = [];
    var RenderType_OneComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_OneComponent, data: {} });
    function View_OneComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 8, "h3", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" Component ONE works "])), (_l()(), i0.ɵeld(2, 16777216, null, null, 6, "button", [["mat-raised-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "longpress"], [null, "keydown"], [null, "touchend"]], function (_v, en, $event) { var ad = true; if (("longpress" === en)) {
            var pd_0 = (i0.ɵnov(_v, 4).show() !== false);
            ad = (pd_0 && ad);
        } if (("keydown" === en)) {
            var pd_1 = (i0.ɵnov(_v, 4)._handleKeydown($event) !== false);
            ad = (pd_1 && ad);
        } if (("touchend" === en)) {
            var pd_2 = (i0.ɵnov(_v, 4)._handleTouchend() !== false);
            ad = (pd_2 && ad);
        } return ad; }, View_MatButton_0, RenderType_MatButton)), i0.ɵdid(3, 180224, null, 0, i1$1.MatButton, [i0.ElementRef, i6.Platform, i4$1.FocusMonitor, [2, i7.ANIMATION_MODULE_TYPE]], null, null), i0.ɵdid(4, 147456, null, 0, i1$3.MatTooltip, [i7$1.Overlay, i0.ElementRef, i19.ScrollDispatcher, i0.ViewContainerRef, i0.NgZone, i6.Platform, i4$1.AriaDescriber, i4$1.FocusMonitor, i1$3.MAT_TOOLTIP_SCROLL_STRATEGY, [2, i8.Directionality], [2, i1$3.MAT_TOOLTIP_DEFAULT_OPTIONS]], { message: [0, "message"] }, null), (_l()(), i0.ɵeld(5, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, View_MatIcon_0, RenderType_MatIcon)), i0.ɵdid(6, 9158656, null, 0, i1$2.MatIcon, [i0.ElementRef, i1$2.MatIconRegistry, [8, null], [2, i1$2.MAT_ICON_LOCATION]], null, null), (_l()(), i0.ɵted(-1, 0, ["extension"])), (_l()(), i0.ɵted(-1, 0, [" Mouse over for tooltip "]))], function (_ck, _v) { var currVal_2 = "I am a button from extension"; _ck(_v, 4, 0, currVal_2); _ck(_v, 6, 0); }, function (_ck, _v) { var currVal_0 = (i0.ɵnov(_v, 3).disabled || null); var currVal_1 = (i0.ɵnov(_v, 3)._animationMode === "NoopAnimations"); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = i0.ɵnov(_v, 6).inline; _ck(_v, 5, 0, currVal_3); }); }
    function View_OneComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "one", [], null, null, null, View_OneComponent_0, RenderType_OneComponent)), i0.ɵdid(1, 49152, null, 0, OneComponent, [], null, null)], null, null); }
    var OneComponentNgFactory = i0.ɵccf("one", OneComponent, View_OneComponent_Host_0, {}, {}, []);

    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */ 
    var MatTooltipModuleNgFactory = i0.ɵcmf(i1$3.MatTooltipModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [TooltipComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i6$1.MutationObserverFactory, i6$1.MutationObserverFactory, []), i0.ɵmpd(4608, i7$1.Overlay, i7$1.Overlay, [i7$1.ScrollStrategyOptions, i7$1.OverlayContainer, i0.ComponentFactoryResolver, i7$1.OverlayPositionBuilder, i7$1.OverlayKeyboardDispatcher, i0.Injector, i0.NgZone, i2.DOCUMENT, i8.Directionality, [2, i2.Location]]), i0.ɵmpd(5120, i7$1.ɵc, i7$1.ɵd, [i7$1.Overlay]), i0.ɵmpd(5120, i1$3.MAT_TOOLTIP_SCROLL_STRATEGY, i1$3.MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, [i7$1.Overlay]), i0.ɵmpd(4608, i10.HAMMER_GESTURE_CONFIG, i4.GestureConfig, [[2, i4.MAT_HAMMER_OPTIONS], [2, i4.MatCommonModule]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i6.PlatformModule, i6.PlatformModule, []), i0.ɵmpd(1073742336, i6$1.ObserversModule, i6$1.ObserversModule, []), i0.ɵmpd(1073742336, i4$1.A11yModule, i4$1.A11yModule, []), i0.ɵmpd(1073742336, i8.BidiModule, i8.BidiModule, []), i0.ɵmpd(1073742336, i18.PortalModule, i18.PortalModule, []), i0.ɵmpd(1073742336, i19.ScrollingModule, i19.ScrollingModule, []), i0.ɵmpd(1073742336, i7$1.OverlayModule, i7$1.OverlayModule, []), i0.ɵmpd(1073742336, i4.MatCommonModule, i4.MatCommonModule, [[2, i4.MATERIAL_SANITY_CHECKS], [2, i10.HAMMER_LOADER]]), i0.ɵmpd(1073742336, i1$3.MatTooltipModule, i1$3.MatTooltipModule, [])]); });
    var styles_TooltipComponent = [".mat-tooltip-panel{pointer-events:none!important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}@media screen and (-ms-high-contrast:active){.mat-tooltip{outline:solid 1px}}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}"];
    var RenderType_TooltipComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_TooltipComponent, data: { "animation": [{ type: 7, name: "state", definitions: [{ type: 0, name: "initial, void, hidden", styles: { type: 6, styles: { opacity: 0, transform: "scale(0)" }, offset: null }, options: undefined }, { type: 0, name: "visible", styles: { type: 6, styles: { transform: "scale(1)" }, offset: null }, options: undefined }, { type: 1, expr: "* => visible", animation: { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "scale(0)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "scale(0.99)", offset: 0.5 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "scale(1)", offset: 1 }, offset: null }] }, timings: "200ms cubic-bezier(0, 0, 0.2, 1)" }, options: null }, { type: 1, expr: "* => hidden", animation: { type: 4, styles: { type: 6, styles: { opacity: 0 }, offset: null }, timings: "100ms cubic-bezier(0, 0, 0.2, 1)" }, options: null }], options: {} }] } });
    function View_TooltipComponent_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "div", [["class", "mat-tooltip"]], [[2, "mat-tooltip-handset", null], [24, "@state", 0]], [[null, "@state.start"], [null, "@state.done"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("@state.start" === en)) {
            var pd_0 = (_co._animationStart() !== false);
            ad = (pd_0 && ad);
        } if (("@state.done" === en)) {
            var pd_1 = (_co._animationDone($event) !== false);
            ad = (pd_1 && ad);
        } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpid(131072, i2.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵted(3, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "mat-tooltip"; var currVal_3 = _co.tooltipClass; _ck(_v, 1, 0, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var tmp_0_0 = null; var currVal_0 = (((tmp_0_0 = i0.ɵunv(_v, 0, 0, i0.ɵnov(_v, 2).transform(_co._isHandset))) == null) ? null : tmp_0_0.matches); var currVal_1 = _co._visibility; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = _co.message; _ck(_v, 3, 0, currVal_4); }); }
    function View_TooltipComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "mat-tooltip-component", [["aria-hidden", "true"]], [[4, "zoom", null]], [["body", "click"]], function (_v, en, $event) { var ad = true; if (("body:click" === en)) {
            var pd_0 = (i0.ɵnov(_v, 1)._handleBodyInteraction() !== false);
            ad = (pd_0 && ad);
        } return ad; }, View_TooltipComponent_0, RenderType_TooltipComponent)), i0.ɵdid(1, 49152, null, 0, i1$3.TooltipComponent, [i0.ChangeDetectorRef, i12.BreakpointObserver], null, null)], null, function (_ck, _v) { var currVal_0 = ((i0.ɵnov(_v, 1)._visibility === "visible") ? 1 : null); _ck(_v, 0, 0, currVal_0); }); }
    var TooltipComponentNgFactory = i0.ɵccf("mat-tooltip-component", i1$3.TooltipComponent, View_TooltipComponent_Host_0, {}, {}, []);

    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */ 
    var SampleExtModuleNgFactory = i0.ɵcmf(SampleExtModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [ɵEmptyOutletComponentNgFactory, OneComponentNgFactory, TooltipComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i6$1.MutationObserverFactory, i6$1.MutationObserverFactory, []), i0.ɵmpd(4608, i7$1.Overlay, i7$1.Overlay, [i7$1.ScrollStrategyOptions, i7$1.OverlayContainer, i0.ComponentFactoryResolver, i7$1.OverlayPositionBuilder, i7$1.OverlayKeyboardDispatcher, i0.Injector, i0.NgZone, i2.DOCUMENT, i8.Directionality, [2, i2.Location]]), i0.ɵmpd(5120, i7$1.ɵc, i7$1.ɵd, [i7$1.Overlay]), i0.ɵmpd(5120, i1$3.MAT_TOOLTIP_SCROLL_STRATEGY, i1$3.MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, [i7$1.Overlay]), i0.ɵmpd(4608, i10.HAMMER_GESTURE_CONFIG, i4.GestureConfig, [[2, i4.MAT_HAMMER_OPTIONS], [2, i4.MatCommonModule]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i1.RouterModule, i1.RouterModule, [[2, i1.ɵangular_packages_router_router_a], [2, i1.Router]]), i0.ɵmpd(1073742336, SampleExtRoutingModule, SampleExtRoutingModule, []), i0.ɵmpd(1073742336, i8.BidiModule, i8.BidiModule, []), i0.ɵmpd(1073742336, i4.MatCommonModule, i4.MatCommonModule, [[2, i4.MATERIAL_SANITY_CHECKS], [2, i10.HAMMER_LOADER]]), i0.ɵmpd(1073742336, i6.PlatformModule, i6.PlatformModule, []), i0.ɵmpd(1073742336, i4.MatRippleModule, i4.MatRippleModule, []), i0.ɵmpd(1073742336, i1$1.MatButtonModule, i1$1.MatButtonModule, []), i0.ɵmpd(1073742336, i1$2.MatIconModule, i1$2.MatIconModule, []), i0.ɵmpd(1073742336, i6$1.ObserversModule, i6$1.ObserversModule, []), i0.ɵmpd(1073742336, i4$1.A11yModule, i4$1.A11yModule, []), i0.ɵmpd(1073742336, i18.PortalModule, i18.PortalModule, []), i0.ɵmpd(1073742336, i19.ScrollingModule, i19.ScrollingModule, []), i0.ɵmpd(1073742336, i7$1.OverlayModule, i7$1.OverlayModule, []), i0.ɵmpd(1073742336, i1$3.MatTooltipModule, i1$3.MatTooltipModule, []), i0.ɵmpd(1073742336, SampleExtModule, SampleExtModule, []), i0.ɵmpd(1024, i1.ROUTES, function () { return [[{ path: "", component: OneComponent }]]; }, [])]); });

    exports.SampleExtModuleNgFactory = SampleExtModuleNgFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));