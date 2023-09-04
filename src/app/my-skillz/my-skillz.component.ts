import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-my-skillz',
  templateUrl: './my-skillz.component.html',
  styleUrls: ['./my-skillz.component.css'],
})
export class MySkillzComponent implements AfterViewInit, OnDestroy {
  isDarkMode: boolean = true;
  subscription: Subscription;
  showEffect: boolean = false;

  constructor(private _commonService: CommonServiceService, private cd: ChangeDetectorRef) {
    this.subscription = _commonService.lightDarkModeEmit.subscribe((status) => {
      this.isDarkMode = status;
    });
    if (window.localStorage.getItem('isDarkMode') == 'true') {
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.showEffect = true;
    }, 0);
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
