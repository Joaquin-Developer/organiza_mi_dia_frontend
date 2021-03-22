import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataFunctionsService {

  constructor() { }

  getDate(dateString: String): String {    
    
    let days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
      "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    const month: string = months[parseInt(dateString.split("-")[1]) - 1];
    const day: string = days[new Date(dateString + " ").getDay()];

    return `${day} ${dateString.split("-")[2]} de ${month}`;
}

}
