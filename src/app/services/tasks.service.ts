import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore/firestore';

export interface Task {
  text: string
  complete: boolean,
}

@Injectable({
  providedIn: 'root'
})

export class TasksService {

  constructor(private firestoreDb: AngularFirestore) { }

  addTask(task) {
    // creando el obj con la data de la tarea
    const taskObj: Task = {
      text: task,
      complete: false,
    };
    // agregando taskObj a firestore
    const tasksCollection = this.firestoreDb.collection<Task>('tasks');
    tasksCollection.add(taskObj);
  }

}
