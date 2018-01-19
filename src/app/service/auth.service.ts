import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/Map';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  state: Observable<firebase.User>;

  constructor(private fb: AngularFireAuth) {
    this.state = fb.authState;
   }

  public login(email: string, password: string) {
    return this.fb.auth.signInWithEmailAndPassword(email, password);
  }

  public logout() {
    return this.fb.auth.signOut();
  }

  get IsAuthenticated () {
    return false;
  }

}
