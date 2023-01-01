import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  showEffect: boolean = false;
  timeoutEvent: any;

  ngOnInit(): void {
    setTimeout(() => {
      this.showEffect = true;
    }, 0);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutEvent);
  }

}
