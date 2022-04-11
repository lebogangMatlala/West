import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TendersVaccanciesComponent } from './tenders-vaccancies.component';

describe('TendersVaccanciesComponent', () => {
  let component: TendersVaccanciesComponent;
  let fixture: ComponentFixture<TendersVaccanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TendersVaccanciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TendersVaccanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
