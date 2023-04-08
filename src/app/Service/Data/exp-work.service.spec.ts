import { TestBed } from '@angular/core/testing';

import { ExpWorkService } from './exp-work.service';

describe('ExpWorkService', () => {
  let service: ExpWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpWorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
