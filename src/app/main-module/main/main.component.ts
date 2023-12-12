import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { MySkillzComponent } from '../my-skillz/my-skillz.component';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements AfterViewInit, OnDestroy {
  isDarkMode: boolean = false;
  subscription: Subscription;
  activeSection: string = '';

  @ViewChild(MySkillzComponent) mySkillzComponent!: MySkillzComponent;
  @ViewChild(NavBarComponent) navBarComponent!: NavBarComponent;

  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.getActiveSection();
  }

  constructor(
    private _commonService: CommonServiceService,
    private cd: ChangeDetectorRef
  ) {
    if(window.localStorage.getItem('isDarkMode') && window.localStorage.getItem('isDarkMode') == 'true') {
      window.localStorage.setItem('isDarkMode', 'true'); // By Default The Theme Will Be Dark
      this.isDarkMode = true;
      _commonService.changeLightDarkModeToggler(true);
    }
    else {
      window.localStorage.setItem('isDarkMode', 'false'); // By Default The Theme Will Be Dark
      this.isDarkMode = false;
      _commonService.changeLightDarkModeToggler(false);
    }
    this.subscription = this._commonService.lightDarkModeEmit.subscribe(
      (status) => {
        this.isDarkMode = status;
      }
    );
  }

  ngAfterViewInit(): void {
    this.getActiveSection();
    this.cd.detectChanges();
  }

  getActiveSection() {
    // Here we are getting current active tab
    let allTabs = [
      'home-section',
      'qualifications-section',
      'skills-section',
      'project-section',
      'contact-section',
    ];
    for (let i = 0; i < allTabs.length; i++) {
      if (this.isScrolledIntoView(document.getElementById(allTabs[i])!)) {
        if (this.activeSection !== allTabs[i]) {
          // Here we are checking current tab and current active tab is same or not for restricting funnction call if already called
          switch (allTabs[i]) {
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
    }
  }

  isScrolledIntoView(el: HTMLElement) {
    // For getting current active section on scroll
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight; // Only completely visible elements return true:
    return isVisible;
  }

  jumpToPage(page: string) {
    this.navBarComponent.goToPage(page);
  }

  ngOnDestroy(): void {
    // On destroy we are unsubscribing the ${subscription}
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
