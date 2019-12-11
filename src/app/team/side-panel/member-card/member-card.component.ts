import { TimeService } from './../../../services/time.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {

  Time = new Date();
  @Input() countryCode: string;
  @Input() offsetTime: number;
  @Input() username: string;
  @Input() picture: string;

  constructor(private timeService: TimeService) { }

  ngOnInit() {
    this.Time = this.timeService.getTimeByOffset(this.offsetTime);
    setInterval(() => {
      this.Time = this.timeService.getTimeByOffset(this.offsetTime);
    }, 60000);
    this.username = this.formatedName(this.username);
  }

  private formatedName(str: string) {
    str = str.replace(".", " ");
    return str.split("@")[0];
  }
}
