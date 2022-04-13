import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVacancyListComponent } from './admin-vacancy-list.component';

describe('AdminVacancyListComponent', () => {
  let component: AdminVacancyListComponent;
  let fixture: ComponentFixture<AdminVacancyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVacancyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVacancyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
