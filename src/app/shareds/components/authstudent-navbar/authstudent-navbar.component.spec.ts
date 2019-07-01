import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthstudentNavbarComponent } from './authstudent-navbar.component';

describe('AuthstudentNavbarComponent', () => {
  let component: AuthstudentNavbarComponent;
  let fixture: ComponentFixture<AuthstudentNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthstudentNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthstudentNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
