import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivSidebarComponent } from './univ-sidebar.component';

describe('UnivSidebarComponent', () => {
  let component: UnivSidebarComponent;
  let fixture: ComponentFixture<UnivSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnivSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
