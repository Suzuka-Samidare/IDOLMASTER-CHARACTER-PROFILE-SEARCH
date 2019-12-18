import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailMillionComponent } from './profile-detail-million.component';

describe('ProfileDetailMillionComponent', () => {
  let component: ProfileDetailMillionComponent;
  let fixture: ComponentFixture<ProfileDetailMillionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDetailMillionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailMillionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
