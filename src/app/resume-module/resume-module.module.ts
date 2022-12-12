import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeHomeComponent } from './resume-home/resume-home.component';
import { ResumeModuleRoutingModule } from './resume-module-routing.module';



@NgModule({
  declarations: [
    ResumeHomeComponent
  ],
  imports: [
    CommonModule,
    ResumeModuleRoutingModule
  ]
})
export class ResumeModuleModule { }
