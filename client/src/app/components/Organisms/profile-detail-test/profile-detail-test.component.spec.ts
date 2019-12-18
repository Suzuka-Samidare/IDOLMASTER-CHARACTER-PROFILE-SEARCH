import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailTestComponent } from './profile-detail-test.component';

describe('ProfileDetailTestComponent', () => {
  let component: ProfileDetailTestComponent;
  let fixture: ComponentFixture<ProfileDetailTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDetailTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
