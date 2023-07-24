import { Component } from "@angular/core";
import { Event, NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-mobile-nav",
  templateUrl: "./mobile-nav.component.html",
  styleUrls: ["./mobile-nav.component.css"],
})
export class MobileNavComponent {
  activeRoute: string = "";
  showModal: boolean = false;
  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = this.findCurrentRoute(window.location.href);
      }
    });
  }

  findCurrentRoute(currentPath: string): string {
    switch (true) {
      case currentPath.indexOf("home") > -1:
        return "home";
      case currentPath.indexOf("projects") > -1:
        return "projects";
      case currentPath.indexOf("about-me") > -1:
        return "about-me";
      case currentPath.indexOf("contact-me") > -1:
        return "contact-me";
      case currentPath.indexOf("resume") > -1:
        return "resume";
      default:
        return "";
    }
  }

  jumpToGithub() {
    window.open("https://github.com/pushpendra-sapkale-dev", "_blank");
  }
}
