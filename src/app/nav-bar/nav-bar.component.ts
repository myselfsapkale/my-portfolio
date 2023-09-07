import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  isDarkMode: boolean = true;
  @Output() jumpToSection: EventEmitter<HTMLElement> = new EventEmitter<HTMLElement>();
  @Input() home!: HTMLElement;
  @Input() experience!: HTMLElement;
  @Input() skillz!: HTMLElement;
  @Input() projects!: HTMLElement;
  @Input() contact!: HTMLElement;
  @Input() activeSection: string = '';
  
  constructor(private _commonService: CommonServiceService) {}

  changeMode() {
    this.isDarkMode = !this.isDarkMode;
    this._commonService.changeLightDarkModeToggler(this.isDarkMode);
    window.localStorage.setItem('isDarkMode', this.isDarkMode ? 'true' : 'false');
  }

  goToPage(section: string) { // To jump on any section
    this.activeSection = section;
    switch(section) {
      case 'home-section':
        this.jumpToSection.emit(this.home);
        break; 
      case 'experience-section':
        this.jumpToSection.emit(this.experience);
        break; 
      case 'skills-section':
        this.jumpToSection.emit(this.skillz);
        break; 
      case 'project-section':
        this.jumpToSection.emit(this.projects);
        break; 
      case 'contact-section':
        this.jumpToSection.emit(this.contact);
        break; 
      default:
        this.jumpToSection.emit(this.home);
        break; 
    } 
  }

}
