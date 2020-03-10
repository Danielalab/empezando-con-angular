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
    console.log(this.arrTasksSource);
  }

}
