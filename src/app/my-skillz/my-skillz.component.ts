import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-my-skillz',
  templateUrl: './my-skillz.component.html',
  styleUrls: ['./my-skillz.component.css'],
})
export class MySkillzComponent implements OnDestroy {
  isDarkMode: boolean = true;
  subscription: Subscription;
  showEffect: boolean = false;  // We are changing status from parent component here

  constructor(private _commonService: CommonServiceService, private cd: ChangeDetectorRef) {
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
