import { TestBed } from '@angular/core/testing';

import { SlideShowService } from './slide-show.service';

describe('SlideShowService', () => {
  let service: SlideShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlideShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
