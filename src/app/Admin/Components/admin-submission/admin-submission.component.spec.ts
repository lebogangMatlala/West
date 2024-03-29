import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubmissionComponent } from './admin-submission.component';

describe('AdminSubmissionComponent', () => {
  let component: AdminSubmissionComponent;
  let fixture: ComponentFixture<AdminSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSubmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
