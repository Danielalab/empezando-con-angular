import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTasksComponent } from './list-tasks.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { TasksService, Task } from 'src/app/services/tasks.service';
import { of } from 'rxjs';

describe('ListTasksComponent', () => {
  let component: ListTasksComponent;
  let fixture: ComponentFixture<ListTasksComponent>;
  let tasksService;
  let arrTasksTest: Task[];
  let currentArrTasksSpy;
  let ulEl: HTMLElement;

  beforeEach(async(() => {
    arrTasksTest = [
      { id: 1, text: 'text 1' },
      { id: 2, text: 'text 2' }
    ];

    // Create a fake TasksService object with a `currentArrTasks` spy
    const tasksService = jasmine.createSpyObj('TasksService', ['currentArrTasks']);
    // Make the spy return a synchronous Observable with the test data
    currentArrTasksSpy = tasksService.currentArrTasks.and.returnValue(of(arrTasksTest) );

    TestBed.configureTestingModule({
      declarations: [ ListTasksComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [ { provide: TasksService, useValue: tasksService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTasksComponent);
    component = fixture.componentInstance;
    // TasksService from the root injector
    tasksService = TestBed.inject(TasksService);
    ulEl = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia de mostrar una lista de 2 tareas', () => {
    // inicialmente ul deberia de estar vacio
    expect(ulEl.children.length).toBe(0);

    // al ejecutar ngOnInit()
    fixture.detectChanges();

    // ulEl debe tener 2 nodos hijos
    expect(ulEl.children.length).toBe(2);
    expect(currentArrTasksSpy.calls.any()).toBe(true, 'currentArrTasksSpy called');
  });

  it('Deberia de mostrar una lista de 3 tareas', () => {
    const newArrTasks = [
      { id: 1, text: 'text 1' },
      { id: 2, text: 'text 2' },
      { id: 3, text: 'text 3' }
    ]
    // cambiar el valor de retorno de currentArrTasks
    currentArrTasksSpy.and.returnValue(of(newArrTasks));

    fixture.detectChanges();

    // ulEl debe tener 3 nodos hijos
    expect(ulEl.children.length).toBe(3);

    // expect(currentArrTasksSpy.calls.any()).toBe(true, 'currentArrTasksSpy called');
  });
  
});
