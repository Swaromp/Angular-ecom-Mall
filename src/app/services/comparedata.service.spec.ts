import { TestBed } from '@angular/core/testing';

import { ComparedataService } from './comparedata.service';

describe('ComparedataService', () => {
  let service: ComparedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComparedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
