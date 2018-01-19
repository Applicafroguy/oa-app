import {Injectable} from '@angular/core';
import * as _ from 'lodash';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import { Promise } from 'q';

@Injectable()
export class AuthGuard implements CanActivate {
    public isLoggedIn: boolean;
    constructor(private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // return this
        //     .af
        //     .authState
        //     .take(1)
        //     .map(authState => !!authState)
        //     .do
        //         (auth => !auth
        //             ? this.router.navigate(['/login'])
        //             : true);
        return false;

            }
}
