import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTenderDescriptionComponent } from './admin-tender-description.component';

describe('AdminTenderDescriptionComponent', () => {
  let component: AdminTenderDescriptionComponent;
  let fixture: ComponentFixture<AdminTenderDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTenderDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTenderDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
