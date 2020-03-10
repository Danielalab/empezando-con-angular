import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private arrTasksSource = new BehaviorSubject([]);
  currentArrTasks = this.arrTasksSource.asObservable;

  constructor() { }

  addTask(task) {
    // creando el obj con la data de la tarea
    const taskObj = {
      text: task,
      id: this.arrTasksSource.value.length + 1
    };
    // creando el arr actualizado con la nueva tarea
    const newArrTasks = [
      ...this.arrTasksSource.value,
      taskObj
    ]
    // actualizando el valor del arr de tareas
    this.arrTasksSource.next(newArrTasks);
  }

}
