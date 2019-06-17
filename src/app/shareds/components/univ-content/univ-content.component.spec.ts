import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivContentComponent } from './univ-content.component';

describe('UnivContentComponent', () => {
  let component: UnivContentComponent;
  let fixture: ComponentFixture<UnivContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnivContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
