import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  settings = {
    columns: {
      name: {
        title: 'Project Name'
      },
      client: {
        title: 'Client Name'
      },
      project: {
        title: 'Project'
      },
      description: {
        title: 'Description'
      }
    }
  };
  constructor() { 
    
  }

  ngOnInit() {
  }

}
