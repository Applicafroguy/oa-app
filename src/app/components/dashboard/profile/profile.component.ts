import { Business } from './../../../shared/business';
import { DataService } from './../../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any;
  id: string;
  constructor(private data: DataService, public activeRout: ActivatedRoute) {
    this.id = activeRout.snapshot.params['id'];

    this.data.getProfile(this.id).subscribe(prof => this.profile = prof);
  }

  ngOnInit() {
  }

}
