import { TestBed } from '@angular/core/testing';

import { KidApiService } from './kid-api.service';

describe('KidApiService', () => {
  let service: KidApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KidApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
