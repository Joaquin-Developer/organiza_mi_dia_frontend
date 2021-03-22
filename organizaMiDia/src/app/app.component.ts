import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Organiza Mi Dia - Inicio';

  constructor() { } // ``

  getUsername(): String {
    return `Usuario: ${sessionStorage.getItem("username_organizaMiDia")}`;
  }

  validAuth(): boolean {
    return "true" === sessionStorage.getItem("authentication_organizaMiDia");
  }

  getYear(): number {
    return new Date().getFullYear();
  }

}
