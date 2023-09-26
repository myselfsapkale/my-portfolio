import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnDestroy {
  isDarkMode: boolean = false;
  subscription: Subscription;
  @Output() goToPageEmit: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _commonService: CommonServiceService) {
    this.subscription = this._commonService.lightDarkModeEmit.subscribe(
      (status) => {
        this.isDarkMode = status;
      }
    );
    if (window.localStorage.getItem('isDarkMode') == 'true') {
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }
  }

  jumpToContact() {
    this.goToPageEmit.emit('contact-section');
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
