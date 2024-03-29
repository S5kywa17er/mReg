import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenService } from '../services/authen.service';
// import { AppURL } from '../app.url';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
    constructor(
        private authen: AuthenService,
        private router: Router
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // if (this.authen.getAuthenticated()) {
        //     return true;
        // }
        // this.router.navigate(['/', AppURL.Login]);
        return true;
    }
}
