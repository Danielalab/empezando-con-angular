import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { FormAddTareaComponent } from './form-add-tarea.component';
import { TasksService } from 'src/app/services/tasks.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

describe('FormAddTareaComponent', () => {
  let component: FormAddTareaComponent;
  let fixture: ComponentFixture<FormAddTareaComponent>;
  let formDe: DebugElement;
  let inputDe: DebugElement;
  let buttonDe: DebugElement;
  let tasksService: Partial<TasksService>;

  beforeEach(async(() => {
    // creando un fake service object con un spy addTask method
    let taskServiceStub = jasmine.createSpyObj('TasksService', ['addTask']);

    TestBed.configureTestingModule({
      declarations: [ FormAddTareaComponent ],
      providers: [
        { provide: TasksService, useValue: taskServiceStub }
      ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddTareaComponent);
    component = fixture.componentInstance;
    tasksService = TestBed.inject(TasksService);
    formDe = fixture.debugElement.query(By.css('form'));
    inputDe = formDe.query(By.css('input'));
    buttonDe = formDe.query(By.css('button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia actualizar el valor del control en el input', () => {
    expect(inputDe.nativeElement.value).toBe('');
    component.taskForm.setValue({ taskValue: 'task test' });
    fixture.detectChanges();
    expect(inputDe.nativeElement.value).toBe('task test');
  });

  it('Deberia llamar a sendTask al dar click al button', () => {
    spyOn(component, 'sendTask');
    buttonDe.nativeElement.click();
    fixture.detectChanges();
    expect(component.sendTask).toHaveBeenCalled();
  });

  it('Deberia llamar a sendTask al dar submit al form', () => {
    spyOn(component, 'sendTask');
    let formEl: HTMLElement = formDe.nativeElement;
    formEl.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.sendTask).toHaveBeenCalled();
  });

  it('Deberia llamar a addTask al ejecutar sendTask', () => {
    component.taskForm.setValue({ taskValue: 'task test' });
    fixture.detectChanges();
    component.sendTask();
    fixture.detectChanges();
    expect(tasksService.addTask).toHaveBeenCalled();
    expect(tasksService.addTask).toHaveBeenCalledWith('task test');
  });
  
});
