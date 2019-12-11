import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {

  @Input() Name: string;
  @Input() Logo: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToTeam() {
    this.router.navigateByUrl("/team/" + this.Name);
  }

}
