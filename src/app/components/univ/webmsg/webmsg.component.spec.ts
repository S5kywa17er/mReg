import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebmsgComponent } from './webmsg.component';

describe('WebmsgComponent', () => {
  let component: WebmsgComponent;
  let fixture: ComponentFixture<WebmsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebmsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
