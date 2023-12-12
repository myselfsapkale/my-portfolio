import { Component, Input } from '@angular/core';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  isDarkMode: boolean = false;
  @Input() activeSection: string = '';

  constructor(private _commonService: CommonServiceService) {
    this.isDarkMode = window.localStorage.getItem('isDarkMode') == 'true' ? true : false;
  }

  changeMode() {
    this.isDarkMode = !this.isDarkMode;
    this._commonService.changeLightDarkModeToggler(this.isDarkMode);
    window.localStorage.setItem(
      'isDarkMode',
      this.isDarkMode ? 'true' : 'false'
    );
  }

  goToPage(section: string) {
    // To jump on any section
    this.activeSection = section;
    switch (section) {
      case 'home-section':
        document.getElementById('home')!.scrollIntoView();
        break;
      case 'qualifications-section':
        document.getElementById('experience')!.scrollIntoView();
        break;
      case 'skills-section':
        document.getElementById('skillz')!.scrollIntoView();
        break;
      case 'project-section':
        document.getElementById('projects')!.scrollIntoView();
        break;
      case 'contact-section':
        document.getElementById('contact')!.scrollIntoView();
        break;
      default:
        document.getElementById('home')!.scrollIntoView();
        break;
    }
  }

}
