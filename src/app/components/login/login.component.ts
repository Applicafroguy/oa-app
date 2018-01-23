import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  error = false;
  constructor(public authService: AuthService, private route: Router) {
      if (this.authService.IsAuthenticated) {
        console.log('true');
      } else {
        console.log('false');
      }
  }

  ngOnInit() {
    this.isLoading = false;
  }

  login(form: NgForm) {
    this.error = false;
    this.isLoading = true;
    this.authService.login(form.value.username, form.value.password).then( res => {
      this.route.navigate(['']);
    }).catch( error => {
      this.error = true;
      this.isLoading = false;
    });
  }
}
