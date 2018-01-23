import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import { Promise } from 'q';
import { AuthService } from './service/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuard implements CanActivate {
    public isLoggedIn: boolean;
    constructor(private router: Router, private auth: AngularFireAuth) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this
            .auth
            .authState
            .take(1)
            .map(authState => !!authState)
            .do
            (auth => !auth
                ? this.router.navigate(['/login'])
                : true);
    }

}
