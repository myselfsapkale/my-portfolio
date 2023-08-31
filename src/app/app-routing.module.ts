import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { MySkillzComponent } from './my-skillz/my-skillz.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    title: 'Experience'
  },
  {
    path: 'my-skillz',
    component: MySkillzComponent,
    title: 'My Skillz'
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Projects'
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    title: 'Contacts'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
