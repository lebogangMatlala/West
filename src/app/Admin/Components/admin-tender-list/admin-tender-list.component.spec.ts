import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTenderListComponent } from './admin-tender-list.component';

describe('AdminTenderListComponent', () => {
  let component: AdminTenderListComponent;
  let fixture: ComponentFixture<AdminTenderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTenderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTenderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
