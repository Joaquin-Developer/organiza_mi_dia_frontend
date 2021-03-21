import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url = "http://127.0.0.1:5000/";

  constructor(private http: HttpClient) {
  }

  /**
   * Example:
   */
  getData(): any {
    return this.http.get<any>(this.url + "get_tasks_from_joaquin");
  }

}
