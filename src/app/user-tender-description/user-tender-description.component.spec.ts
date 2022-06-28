import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTenderDescriptionComponent } from './user-tender-description.component';

describe('UserTenderDescriptionComponent', () => {
  let component: UserTenderDescriptionComponent;
  let fixture: ComponentFixture<UserTenderDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTenderDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTenderDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
