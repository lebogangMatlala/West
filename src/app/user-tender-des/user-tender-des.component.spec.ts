import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTenderDesComponent } from './user-tender-des.component';

describe('UserTenderDesComponent', () => {
  let component: UserTenderDesComponent;
  let fixture: ComponentFixture<UserTenderDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTenderDesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTenderDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
