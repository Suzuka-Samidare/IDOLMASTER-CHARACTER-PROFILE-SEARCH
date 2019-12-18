import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSingleTextfieldComponent } from './form-single-textfield.component';

describe('FormSingleTextfieldComponent', () => {
  let component: FormSingleTextfieldComponent;
  let fixture: ComponentFixture<FormSingleTextfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSingleTextfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSingleTextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
