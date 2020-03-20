import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() data: Task;
  constructor() { }

  ngOnInit(): void {
  }

}
