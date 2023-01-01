import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  showNavItems: boolean = false;
  hideButton: boolean = false;

  constructor(private _router: Router) {

  }

  ngOnInit(): void{
    if(window.innerWidth < 500) {
      this.showNavItems = false;
      this.hideButton = true;
    }
  }

  navigateTo(route: string) {
    setTimeout(() => {
      this._router.navigateByUrl(route);
    }, 0);
  }

}
