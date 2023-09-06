import { Component } from '@angular/core';
import { CommonServiceService } from './services/common-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-portfolio';
  isDarkMode: boolean = true;
  subscription: Subscription;

  constructor(private _commonService: CommonServiceService) {
    window.localStorage.setItem('isDarkMode', 'true'); // By Default The Theme Will Be Dark
    this.subscription = this._commonService.lightDarkModeEmit.subscribe((status) => {
      this.isDarkMode = status;
    });
  }

  jumpToSection(target: HTMLElement) {
    target.scrollIntoView();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
