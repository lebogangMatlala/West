import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTenderEditComponent } from './admin-tender-edit.component';

describe('AdminTenderEditComponent', () => {
  let component: AdminTenderEditComponent;
  let fixture: ComponentFixture<AdminTenderEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTenderEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTenderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
