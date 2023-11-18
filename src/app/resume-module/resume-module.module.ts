import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeModuleRoutingModule } from './resume-module-routing.module';
import { ResumeMainComponent } from './resume-main/resume-main.component';


@NgModule({
  declarations: [
    ResumeMainComponent
  ],
  imports: [
    CommonModule,
    ResumeModuleRoutingModule
  ]
})
export class ResumeModuleModule { }
