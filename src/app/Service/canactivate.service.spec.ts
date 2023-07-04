import { TestBed } from '@angular/core/testing';

import { CanactivateService } from './canactivate.service';

describe('CanactivateService', () => {
  let service: CanactivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanactivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
