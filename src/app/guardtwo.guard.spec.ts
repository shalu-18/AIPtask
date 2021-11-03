import { TestBed } from '@angular/core/testing';

import { GuardtwoGuard } from './guardtwo.guard';

describe('GuardtwoGuard', () => {
  let guard: GuardtwoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardtwoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
