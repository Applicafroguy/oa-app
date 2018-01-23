import { Business } from './../shared/business';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  constructor(private db: AngularFireDatabase) { }
  public registerBusiness(data: Business, id: string) {
     return this.db.object(`profiles/${id}`).set(data);
  }

  public getProfile(id) {
    return this.db.object(`profiles/${id}`).valueChanges();
  }

  public getClients(id) {
    return this.db.list(`profiles/`).valueChanges();
  }
}
