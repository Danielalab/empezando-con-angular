import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PapaComponent } from './components/papa/papa.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { FormAddTareaComponent } from './components/form-add-tarea/form-add-tarea.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    PapaComponent,
    HijoComponent,
    FormAddTareaComponent,
    ListTasksComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
