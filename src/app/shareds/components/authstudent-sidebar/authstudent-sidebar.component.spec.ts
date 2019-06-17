import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthstudentSidebarComponent } from './authstudent-sidebar.component';

describe('AuthstudentSidebarComponent', () => {
  let component: AuthstudentSidebarComponent;
  let fixture: ComponentFixture<AuthstudentSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthstudentSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthstudentSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
