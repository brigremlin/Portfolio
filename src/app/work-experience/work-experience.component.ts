import { Component, OnInit } from '@angular/core';
import { WorkService } from '../../../src/app/shared/work/work.service';
import { Education } from '../shared/education/education.model';
import { EducationService } from '../shared/education/education.service';
import { Work } from '../shared/work/work.model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  work: Work[] = [];
  education: Education[] = [];


  constructor(private workService: WorkService, private educationService: EducationService) { }

  ngOnInit(): void {
    this.work = this.workService.jobs;
    this.education = this.educationService.education;
  }

}
