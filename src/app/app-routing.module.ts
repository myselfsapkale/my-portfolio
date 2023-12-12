import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main-module/main-module.module').then(p => p.MainModuleModule)
  },
  {
    path: 'resume',
    loadChildren: () => import('./resume-module/resume-module.module').then(p => p.ResumeModuleModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
