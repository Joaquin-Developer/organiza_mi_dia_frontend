import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/services/api.service";
import { DataFunctionsService } from "src/app/services/data-functions.service";
import { Task } from "src/app/interfaces/task";

@Component({
  selector: 'app-show-my-tasks',
  templateUrl: './show-my-tasks.component.html',
  styleUrls: ['./show-my-tasks.component.css']
})
export class ShowMyTasksComponent implements OnInit {
  // public allTasks = [];
  public tasks: Task[] = [];

  constructor(
    private apiService: ApiService, 
    private dataFunctions: DataFunctionsService
    // private tasks: Task[]
  ) { 
    
  }

  getAllTasks(): any {
    let dataReq: any[] = [];
    this.apiService.getAllTasks("joaquin").subscribe((data: any) => {
      console.log(data);
      dataReq.push(data);
    });
    return dataReq;
  }

  getDate(dateString: String): String { return this.dataFunctions.getDate(dateString); }

  ngOnInit(): void {
    this.tasks = this.getAllTasks();
  }

}
