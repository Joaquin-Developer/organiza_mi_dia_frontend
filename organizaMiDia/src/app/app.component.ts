import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Organiza Mi Dia - Inicio';

  constructor() { }

  getUsername(): String {
    return `Usuario: ${sessionStorage.getItem("username_organizaMiDia")}`;
  }

  public persons = [
    {id: 1, name: "Juan"},
    {id: 2, name: "Pedro"},
    {id: 3, name: "Ana"},
    {id: 4, name: "juana"},
    {id: 5, name: "Maria"},
  ];

  validAuth(): boolean {
    // ``
    return "true" === sessionStorage.getItem("authentication_organizaMiDia");
  }

}
