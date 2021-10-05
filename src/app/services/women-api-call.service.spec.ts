import { TestBed } from '@angular/core/testing';

import { WomenApiCallService } from './women-api-call.service';

describe('WomenApiCallService', () => {
  let service: WomenApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WomenApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
