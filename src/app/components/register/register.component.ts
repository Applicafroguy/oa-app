import { Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoading = false;
  error = false;
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }

  register (form: NgForm) {
    this.error = false;
    this.isLoading = true;
    this.authService.register(form.value.email, form.value.password).then( res => {
      this.route.navigate(['/register/business']);
    }).catch( error => {
      this.error = true;
      this.isLoading = false;
    });
  }

}
