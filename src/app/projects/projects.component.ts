import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnDestroy {
  isDarkMode: boolean = true;
  subscription: Subscription;

  carouselInfo: any = {
    igismap: {
      active: 0,
      moreInfo: false
    },
    xcellen: {
      active: 0,
      moreInfo: false
    },
    geojsoncreator: {
      active: 0,
      moreInfo: false
    },
  }

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


  changeCarouselImage(carouselName: string, index: number) {
    this.carouselInfo[carouselName]['active'] = index;
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
