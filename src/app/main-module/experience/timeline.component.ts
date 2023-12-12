import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnDestroy {
  isDarkMode: boolean = false;
  subscription: Subscription;

  constructor(private _commonService: CommonServiceService) {
    this.subscription = this._commonService.lightDarkModeEmit.subscribe((status) => {
      this.isDarkMode = status;
    });
    if (window.localStorage.getItem('isDarkMode') == 'true') {
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
