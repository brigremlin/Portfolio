import { Projects } from "./projects.model";

export class ProjectsService {
  projects: Projects[] = [
    {name: "Drink Up Application", image: "../../assets/drinkUp.png", about:"A web application using the CocktailDB API to display drink data.", url: "https://cocktailapp-a09de.firebaseapp.com/" },
    {name: "Candy Craze: Godot Single Level", image: "../../assets/Candy Craze.png", about: "A single level game built using Godot and implementing custom designs and score count.", url: ""},
    {name: "3D Animation: Christmas Scene", image: "../../assets/christmasScene.png", about: "A 45-second animation built using Autodesk Maya. Designs created using Photoshop and ProCreate", url:""},
    {name: "getFRIENDED Web Application", image: "../../assets/getFriended.PNG", about:"A web application implementing user authentication and services to store and manipulate user data", url:"https://getfriended-be40a.web.app/"}

  ];
}
