
import { Projects } from './projects.model';

export class ProjectsService {
  projects: Projects[] = [
    {
      name: 'Drink Up Application',
      image: '../../assets/drinkUp.png',
      about:
        'A web application using the CocktailDB API to display and manipulate drink data.',
      url: 'https://cocktailapp-a09de.firebaseapp.com/',
      id: 0,
      programs: ['Angular' , 'HTML' , 'CSS', 'Typescript']
    },
    {
      name: 'Candy Craze: Godot Single Level',
      image: '../../assets/Candy Craze.png',
      about:
        'A single level game built using Godot and implementing custom designs and score count.',
      url: 'https://youtu.be/vHGY-wSEVSw',
      id: 1,
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
    {
      name: 'getFRIENDED Web Application',
      image: '../../assets/getFriended.PNG',
      about:
        'A web application implementing user authentication and services to store and manipulate user data',
      url: 'https://getfriended-be40a.firebaseapp.com/',
      id: 3,
      programs: ['Angular' , 'HTML', 'CSS', 'Typescript']
    },
    {
      name: 'CSI Employer Project',
      image: '../../assets/csi.PNG',
      about: 'A web application utilizing Angular and API calls to retrieve and push client data',
      url: 'https://csi-form-project.herokuapp.com/',
      id: 4,
      programs: ['Angular' , 'HTML', 'CSS', 'Typescript']
    },
    {
      name: 'Superhero Stack',
      image: '../../assets/superheroStack.PNG',
      about: 'A web application utilizing Ruby on Rails and Bootstrap 5',
      url: 'https://superhero-stack.herokuapp.com/',
      id: 5,
      programs: ['Ruby' , 'Rails', 'CSS', 'Bootstrap 5']
    },
  ];
}
