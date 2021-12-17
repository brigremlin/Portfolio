import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  words = ["Web Developer", "Coffee Enthusiast", "Front-End Developer", "Game Designer"];
  collapse: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
