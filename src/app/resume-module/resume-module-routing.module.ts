import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeMainComponent } from './resume-main/resume-main.component';

const routes: Routes = [
  {
    path: '',
    title: 'Pushpendra Sapkale Resume',
    component: ResumeMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeModuleRoutingModule { }
