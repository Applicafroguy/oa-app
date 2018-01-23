import { Business } from './../../../shared/business';
import { DataService } from './../../../service/data.service';
import { AuthService } from './../../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
myControl: FormControl = new FormControl();
regQue: string; // Registered Question
user: firebase.User;
isLoading: boolean;
// Category List
options = [
    'IT',
    'Accounting',
    'Film',
   ];
  constructor(private auth: AuthService, private data: DataService, private router: Router) {
     auth.state.subscribe(user => {
        this.user = user;
        console.log(this.user.uid);
    });
   }

  ngOnInit() {
    this.isLoading = false;
  }

  addBusiness(form: NgForm) {
    this.isLoading = true;
    this.data.registerBusiness({
      name: form.value.name,
      image: '',
      registered: form.value.regQue === 'Yes' ? true : false,
      reg_number: form.value.regnumber === undefined ? '' : form.value.regnumber,
      category: this.myControl.value,
      operation: form.value.operation,
      address: form.value.address,
      services : form.value.services,
      description: form.value.description,
      phone: form.value.phone,
      facebook: form.value.facebook,
      instagram: form.value.instagram,
      twitter: form.value.twitter,
      website: form.value.website,
      email: this.user.email,
      created_at: Date.now()
    }, this.user.uid).then(res => {
      this.router.navigate(['']);
    }).catch(() => {
      this.isLoading = false;
    });
  }

}
