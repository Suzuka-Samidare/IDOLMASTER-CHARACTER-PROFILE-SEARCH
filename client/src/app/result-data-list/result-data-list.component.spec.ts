import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDataListComponent } from './result-data-list.component';

describe('ResultDataListComponent', () => {
  let component: ResultDataListComponent;
  let fixture: ComponentFixture<ResultDataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultDataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
