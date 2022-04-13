import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVacancyDescriptionComponent } from './admin-vacancy-description.component';

describe('AdminVacancyDescriptionComponent', () => {
  let component: AdminVacancyDescriptionComponent;
  let fixture: ComponentFixture<AdminVacancyDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVacancyDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVacancyDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
