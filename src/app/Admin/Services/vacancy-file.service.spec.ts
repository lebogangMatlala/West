import { TestBed } from '@angular/core/testing';

import { VacancyFileService } from './vacancy-file.service';

describe('VacancyFileService', () => {
  let service: VacancyFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacancyFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
