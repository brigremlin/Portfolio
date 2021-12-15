import { Component, OnInit } from '@angular/core';
import { Skill } from '../shared/skills/skills.model';
import { SkillService } from '../shared/skills/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = []

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skills = this.skillService.skills;
  }

}
