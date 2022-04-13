import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVacancyAddComponent } from './admin-vacancy-add.component';

describe('AdminVacancyAddComponent', () => {
  let component: AdminVacancyAddComponent;
  let fixture: ComponentFixture<AdminVacancyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVacancyAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVacancyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
