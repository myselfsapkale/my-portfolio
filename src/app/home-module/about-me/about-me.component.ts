import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements AfterViewInit, OnDestroy {
  showEffect: boolean = false;
  timeoutEvent: any;
  ngAfterViewInit(): void {
    this.timeoutEvent = setTimeout(() => {
      this.showEffect = true;
    }, 0);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutEvent);
  }

}
