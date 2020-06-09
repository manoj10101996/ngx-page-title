import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    NgxPageTitleService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgxPageTitleService_Factory() { return new NgxPageTitleService(); }, token: NgxPageTitleService, providedIn: "root" });
    NgxPageTitleService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], NgxPageTitleService);
    return NgxPageTitleService;
}());
export { NgxPageTitleService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBhZ2UtdGl0bGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1wYWdlLXRpdGxlLyIsInNvdXJjZXMiOlsibGliL25neC1wYWdlLXRpdGxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDO0lBRUU7SUFBZ0IsQ0FBQztJQUVqQixzQ0FBUSxHQUFSLFVBQVMsS0FBYSxFQUFFLElBQWlCO1FBQWpCLHFCQUFBLEVBQUEsU0FBaUI7UUFDdkMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQyxJQUFJLEtBQUssRUFBRTtZQUNULFFBQVEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQzVCO2FBQU07WUFDTCxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUMzQjtJQUNILENBQUM7O0lBWFUsbUJBQW1CO1FBSC9CLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxtQkFBbUIsQ0FZL0I7OEJBakJEO0NBaUJDLEFBWkQsSUFZQztTQVpZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4UGFnZVRpdGxlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBzZXRUaXRsZSh0aXRsZTogc3RyaW5nLCB0eXBvOiBzdHJpbmcgPSAnJykge1xuICAgIGxldCB0aXRsZV9lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKTtcbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIHRpdGxlX2VsLmlubmVySFRNTCA9IHRpdGxlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXRsZV9lbC5pbm5lckhUTUwgPSB0eXBvO1xuICAgIH1cbiAgfVxufVxuIl19