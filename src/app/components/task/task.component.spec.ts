import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let liDe: DebugElement;
  let liEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    liDe = fixture.debugElement.query(By.css('li'));
    liEl = liDe.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia mostrar el texto test en el li tag', () => {
    // li element deberia estar vacio
    expect(liEl.textContent).toBe('');
    // agregando el valor del Input() data
    component.data = { id: '2', text: 'test', complete: false };
    fixture.detectChanges();
    expect(liEl.textContent).toBe('test')
  });
  
});
