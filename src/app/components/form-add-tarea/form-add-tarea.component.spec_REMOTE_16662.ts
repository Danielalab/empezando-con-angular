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
    // verificando el valor inicial del input
    expect(inputDe.nativeElement.value).toBe('');
    // modificando el valor de taskValue
    component.taskForm.setValue({ taskValue: 'task test' });
    // fixture.detectChanges() detecta los cambios en el componente | template
    fixture.detectChanges();
    // verificar que haya cambiado el valor del input
    expect(inputDe.nativeElement.value).toBe('task test');
  });

  it('Deberia llamar a sendTask al dar click al button', () => {
    // creamos un spy de sendTask method para comprobar que haya sido llamado
    spyOn(component, 'sendTask');
    // disparams el click event del button
    buttonDe.nativeElement.click();
    // fixture.detectChanges() detecta los cambios en el componente | template
    fixture.detectChanges();
    // comprobar que sendTask fue llamado
    expect(component.sendTask).toHaveBeenCalled();
  });

  it('Deberia llamar a sendTask al dar submit al form', () => {
    // creamos un spy de sendTask method para comprobar que haya sido llamado
    spyOn(component, 'sendTask');

    let formEl: HTMLElement = formDe.nativeElement;
    // disparamos el submit event del form
    formEl.dispatchEvent(new Event('submit'));
    // fixture.detectChanges() detecta los cambios en el componente | template
    fixture.detectChanges();
    // comprobar que sendTask fue llamado
    expect(component.sendTask).toHaveBeenCalled();
  });

  it('Deberia llamar a addTask al ejecutar sendTask', () => {
    // actualizamos el valor de taskValue
    component.taskForm.setValue({ taskValue: 'task test' });
    // fixture.detectChanges() detecta los cambios en el componente | template
    fixture.detectChanges();
    component.sendTask();
    fixture.detectChanges();
    // comprobar que addTask method fue llamado
    expect(tasksService.addTask).toHaveBeenCalled();
    // comprobar que addTask method fue llamado con el param 'task test'
    expect(tasksService.addTask).toHaveBeenCalledWith('task test');
  });
  
});
