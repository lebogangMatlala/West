import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVancancyComponent } from './add-vancancy.component';

describe('AddVancancyComponent', () => {
  let component: AddVancancyComponent;
  let fixture: ComponentFixture<AddVancancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVancancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVancancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
