import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramStructureComponent } from './program-structure.component';

describe('ProgramStructureComponent', () => {
  let component: ProgramStructureComponent;
  let fixture: ComponentFixture<ProgramStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
