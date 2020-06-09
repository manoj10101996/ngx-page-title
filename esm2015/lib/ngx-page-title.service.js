import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
NgxPageTitleService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgxPageTitleService_Factory() { return new NgxPageTitleService(); }, token: NgxPageTitleService, providedIn: "root" });
NgxPageTitleService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NgxPageTitleService);
export { NgxPageTitleService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBhZ2UtdGl0bGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1wYWdlLXRpdGxlLyIsInNvdXJjZXMiOlsibGliL25neC1wYWdlLXRpdGxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBRTlCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVEsQ0FBQyxLQUFhLEVBQUUsT0FBZSxFQUFFO1FBQ3ZDLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0MsSUFBSSxLQUFLLEVBQUU7WUFDVCxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUM1QjthQUFNO1lBQ0wsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDM0I7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7QUFaWSxtQkFBbUI7SUFIL0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLG1CQUFtQixDQVkvQjtTQVpZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4UGFnZVRpdGxlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBzZXRUaXRsZSh0aXRsZTogc3RyaW5nLCB0eXBvOiBzdHJpbmcgPSAnJykge1xuICAgIGxldCB0aXRsZV9lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKTtcbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIHRpdGxlX2VsLmlubmVySFRNTCA9IHRpdGxlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXRsZV9lbC5pbm5lckhUTUwgPSB0eXBvO1xuICAgIH1cbiAgfVxufVxuIl19