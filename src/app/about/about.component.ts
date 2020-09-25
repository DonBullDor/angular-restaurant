import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut } from '../animations/app.animation';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    host: {
        '[@flyInOut]': 'true',
        'style': 'display: block;'
        },
        animations: [
          flyInOut()
        ]
})
export class AboutComponent implements OnInit {

    leaders: Leader[];
    leaderErrMsg: string;

    constructor(
        private leaderService: LeaderService,
        @Inject('BaseURL') private BaseURL
      ) {}

    ngOnInit(): void {
        this.leaderService.getLeaders().subscribe(
          (result) => (this.leaders = result),
          (errMsg) => (this.leaderErrMsg = <any>errMsg)
        );
      }

}
