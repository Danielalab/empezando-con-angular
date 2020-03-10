import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-form-add-tarea',
  templateUrl: './form-add-tarea.component.html',
  styleUrls: ['./form-add-tarea.component.css']
})
export class FormAddTareaComponent implements OnInit {
  taskForm = new FormGroup({
    taskValue: new FormControl('')
  });

  constructor() { }

  sendTask() {
    console.log(this.taskForm.value);
  }

  ngOnInit(): void {
  }

}
