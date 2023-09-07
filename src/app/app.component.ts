import { Component, HostListener, ViewChild } from '@angular/core';
import { CommonServiceService } from './services/common-service.service';
import { Subscription } from 'rxjs';
import { MySkillzComponent } from './my-skillz/my-skillz.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-portfolio';
  isDarkMode: boolean = true;
  subscription: Subscription;
  activeSection: string = '';

  @ViewChild(MySkillzComponent) mySkillzComponent!: MySkillzComponent; 

  @HostListener('document:wheel', ['$event.target'])
  public onWheel() {
    this.getActiveSection();
  }

  constructor(private _commonService: CommonServiceService) {
    window.localStorage.setItem('isDarkMode', 'true'); // By Default The Theme Will Be Dark
    this.subscription = this._commonService.lightDarkModeEmit.subscribe(
      (status) => {
        this.isDarkMode = status;
      }
    );
  }

  jumpToSection(target: HTMLElement) {   // For jumping to any section
    target.scrollIntoView();
  }

  getActiveSection() {  // Here we are getting current active tab
    let allTabs = [ 'home-section', 'experience-section', 'skills-section', 'project-section', 'contact-section'];
    for(let i = 0; i < allTabs.length; i++){
      if(this.isScrolledIntoView(document.getElementById(allTabs[i])!)) {
        if(this.activeSection !== allTabs[i]) { // Here we are checking current tab and current active tab is same or not for restricting funnction call if already called
          switch(allTabs[i]) {
            case 'skills-section': 
              this.mySkillzComponent.showEffect = false;
              setTimeout(() => {
                this.mySkillzComponent.showEffect = true;
              }, 0);
              break;
              default:
                break;
            }
          }
        this.activeSection = allTabs[i];
        return;
      }
    };
  }

  isScrolledIntoView(el: HTMLElement) {  // For getting current active section on scroll
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;   // Only completely visible elements return true:
    return isVisible;
  }

  ngOnDestroy(): void { // On destroy we are unsubscribing the ${subscription}
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
