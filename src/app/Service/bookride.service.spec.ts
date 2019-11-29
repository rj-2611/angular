import { TestBed } from '@angular/core/testing';

import { BookrideService } from './bookride.service';

describe('BookrideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookrideService = TestBed.get(BookrideService);
    expect(service).toBeTruthy();
  });
});
