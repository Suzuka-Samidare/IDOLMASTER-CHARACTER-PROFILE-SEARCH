import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailShinycolorsComponent } from './profile-detail-shinycolors.component';

describe('ProfileDetailShinycolorsComponent', () => {
  let component: ProfileDetailShinycolorsComponent;
  let fixture: ComponentFixture<ProfileDetailShinycolorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDetailShinycolorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailShinycolorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
