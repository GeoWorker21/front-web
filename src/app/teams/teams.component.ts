import { Component, OnInit } from '@angular/core';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';

let fileUpload = require('fuctbase64');

@Component({
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  NameNewTeam: string = '';
  FileToUpload: string;

  constructor(public readonly swalTargets: SwalPortalTargets) { }

  ngOnInit() {
  }

  onFileUpload(event: any) {
    fileUpload(event).then(result => { this.FileToUpload = result.base64 });
  }
}
