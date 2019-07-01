import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthstudentContentComponent } from './authstudent-content.component';

describe('AuthstudentContentComponent', () => {
  let component: AuthstudentContentComponent;
  let fixture: ComponentFixture<AuthstudentContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthstudentContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthstudentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
