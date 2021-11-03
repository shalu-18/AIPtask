import { TestBed } from '@angular/core/testing';

import { AurthguardGuard } from './aurthguard.guard';

describe('AurthguardGuard', () => {
  let guard: AurthguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AurthguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
