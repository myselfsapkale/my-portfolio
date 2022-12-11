import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        title: 'Pushpendra Sapkale - Home'
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        title: 'Pushpendra Sapkale - Projects'
      },
      {
        path: 'about-me',
        component: AboutMeComponent,
        title: 'Pushpendra Sapkale - About Me'
      },
      {
        path: 'contact-me',
        component: ContactMeComponent,
        title: 'Pushpendra Sapkale - Contact Me'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuleRoutingModule { }
