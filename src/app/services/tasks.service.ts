import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore/public_api';

export interface Task {
  text: string
  complete: boolean,
}

@Injectable({
  providedIn: 'root'
})

export class TasksService {
  private tasksCollection: AngularFirestoreCollection<Task>;
  tasks: Observable<Task[]>;

  constructor(private firestoreDb: AngularFirestore) {
    this.tasksCollection = this.firestoreDb.collection<Task>('tasks');
    this.tasks = this.tasksCollection.valueChanges();
  }

  addTask(task) {
    // creando el obj con la data de la tarea
    const taskObj: Task = {
      text: task,
      complete: false,
    };
    // agregando taskObj a firestore
    this.tasksCollection.add(taskObj);
  }

  getTasks() {
    return this.tasks;
  }
}
