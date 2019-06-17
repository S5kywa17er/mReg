import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthstaffSidebarComponent } from './authstaff-sidebar.component';

describe('AuthstaffSidebarComponent', () => {
  let component: AuthstaffSidebarComponent;
  let fixture: ComponentFixture<AuthstaffSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthstaffSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthstaffSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
