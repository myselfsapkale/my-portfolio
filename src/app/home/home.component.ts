import { Component, OnDestroy } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnDestroy {
  isDarkMode: boolean = true;
  subscription: Subscription;

  constructor(private _commonService: CommonServiceService) {
    this.subscription = _commonService.lightDarkModeEmit.subscribe((status) => {
      this.isDarkMode = status;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
