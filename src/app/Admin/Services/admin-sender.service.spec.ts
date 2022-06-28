import { TestBed } from '@angular/core/testing';

import { AdminSenderService } from './admin-sender.service';

describe('AdminSenderService', () => {
  let service: AdminSenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminSenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
