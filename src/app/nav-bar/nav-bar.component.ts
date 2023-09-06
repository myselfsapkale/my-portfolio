import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  isDarkMode: boolean = true;
  activeSection: string = '';
  @Output() jumpToSection: EventEmitter<HTMLElement> = new EventEmitter<HTMLElement>();
  @Input() home!: HTMLElement;
  @Input() experience!: HTMLElement;
  @Input() skillz!: HTMLElement;
  @Input() projects!: HTMLElement;
  @Input() contact!: HTMLElement;

  constructor(private _commonService: CommonServiceService) {}

  changeMode() {
    this.isDarkMode = !this.isDarkMode;
    this._commonService.changeLightDarkModeToggler(this.isDarkMode);
    window.localStorage.setItem('isDarkMode', this.isDarkMode ? 'true' : 'false');
  }

  goToPage(section: string) {
    this.activeSection = section;
    switch(section) {
      case 'home':
        this.jumpToSection.emit(this.home);
        break; 
      case 'experience':
        this.jumpToSection.emit(this.experience);
        break; 
      case 'skillz':
        this.jumpToSection.emit(this.skillz);
        break; 
      case 'projects':
        this.jumpToSection.emit(this.projects);
        break; 
      case 'contact':
        this.jumpToSection.emit(this.contact);
        break; 
      default:
        this.jumpToSection.emit(this.home);
        break; 
    } 
  }

}
