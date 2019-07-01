import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthstaffContentComponent } from './authstaff-content.component';

describe('AuthstaffContentComponent', () => {
  let component: AuthstaffContentComponent;
  let fixture: ComponentFixture<AuthstaffContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthstaffContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthstaffContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
