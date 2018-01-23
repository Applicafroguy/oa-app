import { DataService } from './service/data.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent, LoginComponent} from './components';

// import Material Design
import {MatToolbarModule, MatFormFieldModule, MatInputModule, MatCardModule,
  MatButtonModule, MatMenuModule, MatIconModule} from '@angular/material';
import { AuthGuard } from './auth.guard';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/Firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './service/auth.service';
import { LaddaModule } from 'angular2-ladda';
import { AngularFireDatabaseModule } from 'angularfire2/database';


const firebaseConfig = {
  apiKey: 'AIzaSyAUnWViy2fL_0ab-oEYtpCeJQaaGb6Gkpc',
  authDomain: 'oa-data.firebaseapp.com',
  databaseURL: 'https://oa-data.firebaseio.com',
  projectId: 'oa-data',
  storageBucket: 'oa-data.appspot.com',
  messagingSenderId: '929072613375'
};


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig, 'OA APP'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    DashboardModule,
    LaddaModule
  ],
  providers: [AuthGuard, AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
