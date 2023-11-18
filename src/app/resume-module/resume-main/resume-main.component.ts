import { Component } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-resume-main',
  templateUrl: './resume-main.component.html',
  styleUrls: ['./resume-main.component.css']
})
export class ResumeMainComponent {
  isDarkMode: boolean = false;
  constructor(private _commonService: CommonServiceService) {
    this.isDarkMode = window.localStorage.getItem('isDarkMode') == 'true' ? true : false;
  }
}
