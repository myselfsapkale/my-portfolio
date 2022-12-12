import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  showNavItems: boolean = true;

  ngOnInit(): void{
    console.log(window.innerWidth);
    if(window.innerWidth < 500) {
      this.showNavItems = false;
    }
  }

}
