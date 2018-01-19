import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error = false;
  constructor(private authService: AuthService) {
      if (this.authService.IsAuthenticated) {
        console.log('true');
      } else {
        console.log('false');
      }
  }

  ngOnInit() {

  }

  login(form: NgForm) {
    this.error = false;
    this.authService.login(form.value.username, form.value.password).then( res => {
      console.log(res);
    }).catch( error => {
      this.error = true;
      console.log(error.message);
    });
   
  }
}
