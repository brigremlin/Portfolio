import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ProjectsService } from './projects/projects.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SkillsComponent,
    ProjectsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
