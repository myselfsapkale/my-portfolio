import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnDestroy, AfterViewInit {
  isDarkMode: boolean = false;
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


  ngAfterViewInit(): void {
    const igismapCarousel = document.getElementById('igismapCard');
    const xcellenCarousel = document.getElementById('xcellenCard');
    const geojsoncreatorCarousel = document.getElementById('geojsoncreatorCard');

    igismapCarousel?.addEventListener('slide.bs.carousel', (event: any) => {
      this.carouselInfo.igismap.active = event.to;
    });
    
    xcellenCarousel?.addEventListener('slide.bs.carousel', (event: any) => {
      this.carouselInfo.xcellen.active = event.to;
    });
    
    geojsoncreatorCarousel?.addEventListener('slide.bs.carousel', (event: any) => {
      this.carouselInfo.geojsoncreator.active = event.to;
    });
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
