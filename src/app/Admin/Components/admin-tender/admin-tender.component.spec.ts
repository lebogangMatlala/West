import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTenderComponent } from './admin-tender.component';

describe('AdminTenderComponent', () => {
  let component: AdminTenderComponent;
  let fixture: ComponentFixture<AdminTenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
