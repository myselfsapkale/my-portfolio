import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { TimelineComponent } from './experience/timeline.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { MySkillzComponent } from './my-skillz/my-skillz.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactsComponent,
    TimelineComponent,
    HomeComponent,
    MainComponent,
    MySkillzComponent,
    NavBarComponent, 
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    FormsModule
  ]
})
export class MainModuleModule { }
