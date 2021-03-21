import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertTasksComponent } from './insert-tasks/insert-tasks.component';
import { ShowMyTasksComponent } from './show-my-tasks/show-my-tasks.component';
import { UpdateTasksComponent } from './update-tasks/update-tasks.component';

const routes: Routes = [
  {
    path: "",
    component: ShowMyTasksComponent
  },
  {
    path: "insertTasks",
    component: InsertTasksComponent
  },
  {
    path: "updateTasks",
    component: UpdateTasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
