import { TestBed } from '@angular/core/testing';

import { CafeSubscriptionService } from './cafe-subscription.service';

describe('CafeSubscriptionService', () => {
  let service: CafeSubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CafeSubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
