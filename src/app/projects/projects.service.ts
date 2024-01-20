
import { Projects } from './projects.model';

export class ProjectsService {
  projects: Projects[] = [
    {
      name: 'Drink Up Application',
      image: '../../assets/drinkUpBackground.PNG',
      about:
        'A web application using the CocktailDB API to display and manipulate drink data.',
      url: "https://drinkup-cocktail-application.web.app",
      id: 0,
      programs: ['Angular', ' HTML', ' CSS', ' Typescript']
    },
    {
      name: 'Video Rush Rentals',
      image: '../../assets/images/video-rush.png',
      about:
        'A customer management system that includes customer profiles, rental history, and reporting',
      url: 'https://videorushrentals.com/',
      id: 1,
      programs: ['Angular' , ' PostgresSQL', ' Spring Boot', ' Typescript']
    },
    {
      name: 'Candy Craze: Godot Single Level',
      image: '../../assets/Candy Craze.png',
      about:
        'A single level game built using Godot and implementing custom designs and score count.',
      url: 'https://youtu.be/vHGY-wSEVSw',
      id: 3,
      programs: ['Godot']
    },
    {
      name: '3D Animation: Christmas Scene',
      image: '../../assets/christmasScene.png',
      about:
        'A 45-second animation built using Autodesk Maya. Designs created using Photoshop and ProCreate',
      url: 'https://youtu.be/2PggXdkVrAo',
      id: 2,
      programs: ['Maya']
    },
  ];
}
