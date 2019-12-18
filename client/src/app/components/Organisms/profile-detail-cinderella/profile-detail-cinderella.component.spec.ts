import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailCinderellaComponent } from './profile-detail-cinderella.component';

describe('ProfileDetailCinderellaComponent', () => {
  let component: ProfileDetailCinderellaComponent;
  let fixture: ComponentFixture<ProfileDetailCinderellaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDetailCinderellaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailCinderellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
