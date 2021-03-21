import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertTasksComponent } from './insert-tasks/insert-tasks.component';
import { UpdateTasksComponent } from './update-tasks/update-tasks.component';
import { ShowMyTasksComponent } from './show-my-tasks/show-my-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertTasksComponent,
    UpdateTasksComponent,
    ShowMyTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
