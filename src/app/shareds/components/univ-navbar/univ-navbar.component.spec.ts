import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivNavbarComponent } from './univ-navbar.component';

describe('UnivNavbarComponent', () => {
  let component: UnivNavbarComponent;
  let fixture: ComponentFixture<UnivNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnivNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
