import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthstaffNavbarComponent } from './authstaff-navbar.component';

describe('AuthstaffNavbarComponent', () => {
  let component: AuthstaffNavbarComponent;
  let fixture: ComponentFixture<AuthstaffNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthstaffNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthstaffNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
