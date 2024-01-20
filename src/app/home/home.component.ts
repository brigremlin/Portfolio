import { Component, OnInit } from '@angular/core';
import { Projects } from '../projects/projects.model';
import { ProjectsService } from '../projects/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projectList: Projects[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectList = this.projectsService.projects;
  }

}
