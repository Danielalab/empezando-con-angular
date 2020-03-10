import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddTareaComponent } from './form-add-tarea.component';

describe('FormAddTareaComponent', () => {
  let component: FormAddTareaComponent;
  let fixture: ComponentFixture<FormAddTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
