import { TestBed } from '@angular/core/testing';

import { TechnologysService } from './technologys.service';

describe('TechnologysService', () => {
  let service: TechnologysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnologysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
