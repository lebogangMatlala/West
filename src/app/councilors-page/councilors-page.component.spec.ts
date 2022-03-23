import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncilorsPageComponent } from './councilors-page.component';

describe('CouncilorsPageComponent', () => {
  let component: CouncilorsPageComponent;
  let fixture: ComponentFixture<CouncilorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouncilorsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncilorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
