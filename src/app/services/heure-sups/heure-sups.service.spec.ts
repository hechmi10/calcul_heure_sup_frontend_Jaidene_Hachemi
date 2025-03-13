import { TestBed } from '@angular/core/testing';

import { HeureSupsService } from './heure-sups.service';

describe('HeureSupsService', () => {
  let service: HeureSupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeureSupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
