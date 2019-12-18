import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailSidemComponent } from './profile-detail-sidem.component';

describe('ProfileDetailSidemComponent', () => {
  let component: ProfileDetailSidemComponent;
  let fixture: ComponentFixture<ProfileDetailSidemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDetailSidemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailSidemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
