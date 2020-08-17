import { TestBed } from '@angular/core/testing';

import { InqueryService } from './inquery.service';

describe('InqueryService', () => {
  let service: InqueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InqueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
