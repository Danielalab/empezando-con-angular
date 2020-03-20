import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTasksComponent } from './list-tasks.component';
import { TasksService, Task } from 'src/app/services/tasks.service';
import { of } from 'rxjs';
import { Component } from '@angular/core';

@Component({selector: 'app-task', template: '<li></li>'})
class TaskStubComponent {}

describe('ListTasksComponent', () => {
  let component: ListTasksComponent;
  let fixture: ComponentFixture<ListTasksComponent>;
  let tasksService;
  let arrTasksTest: Task[];
  let ulEl: HTMLElement;
  let getTasksSpy;

  beforeEach(async(() => {
    arrTasksTest = [
      { id: '1', text: 'text 1', complete: false },
      { id: '2', text: 'text 2', complete: false }
    ];

    let taskServiceStub = jasmine.createSpyObj('TasksService', ['getTasks']);
    getTasksSpy = taskServiceStub.getTasks.and.returnValue( of(arrTasksTest) );

    TestBed.configureTestingModule({
      declarations: [
        ListTasksComponent,
        TaskStubComponent
      ],
      providers: [ { provide: TasksService, useValue: taskServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTasksComponent);
    component = fixture.componentInstance;
    // TasksService from the root injector
    tasksService = TestBed.inject(TasksService);
    ulEl = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia de mostrar una lista de 2 tareas', () => {
    // inicialmente ul deberia de estar vacio
    expect(ulEl.querySelectorAll('li').length).toBe(0);

    // al ejecutar ngOnInit()
    fixture.detectChanges();

    // ulEl debe tener 2 nodos hijos
    expect(ulEl.querySelectorAll('li').length).toBe(2);
  });

  it('Deberia de mostrar una lista de 3 tareas', () => {
    const newArrTasks = [
      { id: 1, text: 'text 1' },
      { id: 2, text: 'text 2' },
      { id: 3, text: 'text 3' }
    ]
    // cambiar el valor de retorno de getTasks
    getTasksSpy.and.returnValue(of(newArrTasks));

    fixture.detectChanges();

    // ulEl debe tener 3 nodos hijos
    expect(ulEl.querySelectorAll('li').length).toBe(3);
  });
  
});
