import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVancancyComponent } from './list-vancancy.component';

describe('ListVancancyComponent', () => {
  let component: ListVancancyComponent;
  let fixture: ComponentFixture<ListVancancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVancancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVancancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
