import { TeamsService } from './../../services/teams.service';
import { Member } from './../../models/member';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {

  Members: Member[] = [];
  @Input() TeamName: string;

  constructor(private teamsService: TeamsService) { }

  ngOnInit() {
    this.teamsService.getMembersTeam(this.TeamName).subscribe(
      data => {
        this.Members = data;
      },
      error => {
        console.log("error", error);
      }
    );
  }

}
