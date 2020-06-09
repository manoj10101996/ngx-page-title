import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

let NgxPageTitleService = class NgxPageTitleService {
    constructor() { }
    setTitle(title, typo = '') {
        let title_el = document.querySelector("title");
        if (title) {
            title_el.innerHTML = title;
        }
        else {
            title_el.innerHTML = typo;
        }
    }
};
NgxPageTitleService.ɵprov = ɵɵdefineInjectable({ factory: function NgxPageTitleService_Factory() { return new NgxPageTitleService(); }, token: NgxPageTitleService, providedIn: "root" });
NgxPageTitleService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NgxPageTitleService);

let NgxPageTitleComponent = class NgxPageTitleComponent {
    constructor() { }
    ngOnInit() {
    }
};
NgxPageTitleComponent = __decorate([
    Component({
        selector: 'lib-ngx-page-title',
        template: `
    <p>
      ngx-page-title works!
    </p>
  `
    })
], NgxPageTitleComponent);

let NgxPageTitleModule = class NgxPageTitleModule {
};
NgxPageTitleModule = __decorate([
    NgModule({
        declarations: [NgxPageTitleComponent],
        imports: [],
        exports: [NgxPageTitleComponent]
    })
], NgxPageTitleModule);

/*
 * Public API Surface of ngx-page-title
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxPageTitleComponent, NgxPageTitleModule, NgxPageTitleService };
//# sourceMappingURL=ngx-page-title.js.map
