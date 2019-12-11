import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  TeamName: string;
  Logo: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.TeamName = this.route.snapshot.paramMap.get("name");
  }

}
