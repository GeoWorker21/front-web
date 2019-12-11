import { TeamsService } from './../services/teams.service';
import { Component, OnInit } from '@angular/core';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import { Team } from '../models/team';

let fileUpload = require('fuctbase64');

@Component({
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  NameNewTeam: string = '';
  FileToUpload: string;
  Teams: Team[] = [];

  constructor(public readonly swalTargets: SwalPortalTargets, private teamsService: TeamsService) { }

  ngOnInit() {
    this.refreshTeams();
  }

  onFileUpload(event: any) {
    fileUpload(event).then(result => { this.FileToUpload = result.base64 });
  }

  onCreateTeam() {
    this.teamsService.create(this.NameNewTeam, this.FileToUpload).subscribe(
      data => {
        this.refreshTeams();
      },
      error => {
        console.log("error", error);
      }
      );
  }

  refreshTeams() {
    this.teamsService.getTeams().subscribe(
      data => {
        this.Teams = data;
      },
      error => {
        console.log("error", error);
      }
    );
  }
}
