import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-form-add-tarea',
  templateUrl: './form-add-tarea.component.html',
  styleUrls: ['./form-add-tarea.component.css']
})
export class FormAddTareaComponent implements OnInit {
  taskForm = new FormGroup({
    taskValue: new FormControl('')
  });

  constructor(private tasksService: TasksService) { }

  sendTask() {
    this.tasksService.addTask(this.taskForm.value.taskValue);
    this.taskForm.setValue({
      taskValue: ''
    })
  }

  ngOnInit(): void {
  }

}
