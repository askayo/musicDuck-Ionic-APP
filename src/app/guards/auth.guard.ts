import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        let userAuthenticated = false; // Pour le moment nous allons garder cette valeur à false

        if (userAuthenticated) {
            return true;
        } else {
            return false;
        }
    }
}
