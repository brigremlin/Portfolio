import { Injectable } from "@angular/core";
import { Education } from "./education.model";

@Injectable({providedIn: 'root'})
export class EducationService {
  education: Education[] = [
    new Education(
      'Western Kentucky University',
      '../../assets/images/wku-logo.png',
      'Game Design Certification',
      'May 2021'
    ),
    new Education(
        'Codefi Code Labs',
        '../../assets/images/logo-codefi.png',
        'Full Stack Developers Bootcamp',
        'August 2021 - July 2022'
      ),
      new Education(
        'Western Governors University',
        '../../assets/images/wgu.png',
        'Bachelor of Science - Software Engineering',
        'January 2024'
      ),
  ]

  constructor(){}
}
