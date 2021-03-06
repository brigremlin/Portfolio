import { Component, OnInit } from '@angular/core';
import { Projects } from './projects.model';
import { ProjectsService } from './projects.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectList: Projects[] = [];
  skills;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectList = this.projectsService.projects;
    }

  }


