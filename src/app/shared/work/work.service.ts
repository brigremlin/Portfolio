import { Injectable } from "@angular/core";
import { Work } from "./work.model";

@Injectable({providedIn: 'root'})
export class WorkService {
  jobs: Work[] = [
    new Work(
      'Computer Services Inc.',
      '../../assets/images/csi.png',
      'Builds out custom sites, components, and plugins based on client needs using PHP, HTML, CSS, Javascript.',
      'July 2022-Present',
      'Software Engineer'
    ),
    new Work(
        'Codefi',
        '../../assets/images/logo-codefi.png',
        'Implements responsive design and routing features to enhance user experience. ',
        'March 2022 - July 2022',
        'Software Apprentice'
      ),
  ]

  constructor(){}
}
export { Work };

