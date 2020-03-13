import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAddTareaComponent } from './components/form-add-tarea/form-add-tarea.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { TaskComponent } from './components/task/task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ShowNameComponent } from './components/show-name/show-name.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAddTareaComponent,
    ListTasksComponent,
    TaskComponent,
    ButtonsComponent,
    ShowNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
