import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailDearlystarsComponent } from './profile-detail-dearlystars.component';

describe('ProfileDetailDearlystarsComponent', () => {
  let component: ProfileDetailDearlystarsComponent;
  let fixture: ComponentFixture<ProfileDetailDearlystarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDetailDearlystarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailDearlystarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
