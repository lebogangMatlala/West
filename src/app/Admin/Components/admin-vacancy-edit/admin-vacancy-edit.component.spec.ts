import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVacancyEditComponent } from './admin-vacancy-edit.component';

describe('AdminVacancyEditComponent', () => {
  let component: AdminVacancyEditComponent;
  let fixture: ComponentFixture<AdminVacancyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVacancyEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVacancyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
