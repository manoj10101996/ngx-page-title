import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

var NgxPageTitleService = /** @class */ (function () {
    function NgxPageTitleService() {
    }
    NgxPageTitleService.prototype.setTitle = function (title, typo) {
        if (typo === void 0) { typo = ''; }
        var title_el = document.querySelector("title");
        if (title) {
            title_el.innerHTML = title;
        }
        else {
            title_el.innerHTML = typo;
        }
    };
    NgxPageTitleService.ɵprov = ɵɵdefineInjectable({ factory: function NgxPageTitleService_Factory() { return new NgxPageTitleService(); }, token: NgxPageTitleService, providedIn: "root" });
    NgxPageTitleService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], NgxPageTitleService);
    return NgxPageTitleService;
}());

var NgxPageTitleComponent = /** @class */ (function () {
    function NgxPageTitleComponent() {
    }
    NgxPageTitleComponent.prototype.ngOnInit = function () {
    };
    NgxPageTitleComponent = __decorate([
        Component({
            selector: 'lib-ngx-page-title',
            template: "\n    <p>\n      ngx-page-title works!\n    </p>\n  "
        })
    ], NgxPageTitleComponent);
    return NgxPageTitleComponent;
}());

var NgxPageTitleModule = /** @class */ (function () {
    function NgxPageTitleModule() {
    }
    NgxPageTitleModule = __decorate([
        NgModule({
            declarations: [NgxPageTitleComponent],
            imports: [],
            exports: [NgxPageTitleComponent]
        })
    ], NgxPageTitleModule);
    return NgxPageTitleModule;
}());

/*
 * Public API Surface of ngx-page-title
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxPageTitleComponent, NgxPageTitleModule, NgxPageTitleService };
//# sourceMappingURL=ngx-page-title.js.map
