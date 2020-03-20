import { Component, OnInit } from '@angular/core';
import { TasksService, Task } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {
  listTasks: Task[];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.getTasks()
      .subscribe((arrTaks) => {
        this.listTasks = arrTaks;
      })
  }

}
