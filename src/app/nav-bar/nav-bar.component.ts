import { Component } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  isDarkMode: boolean = true;
  constructor(private _commonService: CommonServiceService) {}

  changeMode() {
    this.isDarkMode = !this.isDarkMode;
    this._commonService.changeLightDarkModeToggler(this.isDarkMode);
  }

}
