import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import 'firebase/firestore';

export interface Task {
  text: string
  complete: boolean,
  id: string,
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
    const taskObj = {
      text: task,
      complete: false,
      id: this.firestoreDb.createId(),
    };
    // agregando taskObj a firestore
    this.tasksCollection.doc(taskObj.id).set(taskObj);
  }

  getTasks() {
    return this.tasks;
  }
}
