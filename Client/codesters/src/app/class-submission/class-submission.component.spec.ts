import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSubmissionComponent } from './class-submission.component';

describe('ClassSubmissionComponent', () => {
  let component: ClassSubmissionComponent;
  let fixture: ComponentFixture<ClassSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
