import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private API_URL = "http://127.0.0.1:5000/";

  constructor(private http: HttpClient) { }

  getAllTasks(username: String): any { 
    // return this.http.get<Any>(this.ChuckUrl);
    return this.http.get(`${this.API_URL}get_tasks_from_${username}`);    
  }

  getAllTasksToDo(username: String) { }

  getAllTasksDone(username: String) { }

  getAllTasksForToday(username: String) { }

  getAllTasksToDoForToday(username: String) { }

  getAllTasksForThisWeek(username: String) { }

  getAllTasksToDoForThisWeek(username: String) { }

}
