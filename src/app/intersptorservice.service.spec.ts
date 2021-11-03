import { TestBed } from '@angular/core/testing';

import { IntersptorserviceService } from './intersptorservice.service';

describe('IntersptorserviceService', () => {
  let service: IntersptorserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntersptorserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
