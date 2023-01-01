import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit, OnDestroy {
  showEffect: boolean = false;
  timeoutEvent: any;

  ngOnInit(): void {
    this.timeoutEvent = setTimeout(() => {
      this.showEffect = true;
    }, 0);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutEvent);
  }

}
