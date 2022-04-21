import { Injectable } from "@angular/core";
import { Skill } from "./skills.model";

@Injectable({providedIn: 'root'})
export class SkillService {
  skills: Skill[] = [
    new Skill(
      'html',
      '/Users/briannagrimsley/Desktop/CodeLabs/portfolio/src/assets/html.png'
    ),
    new Skill (
      'Angular',
      '/Users/briannagrimsley/Desktop/CodeLabs/portfolio/src/assets/angular.svg'
    )
  ]

  constructor(){}



}
