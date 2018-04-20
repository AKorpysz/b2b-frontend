import { TestBed, inject } from '@angular/core/testing';

import { ScreenDetectorService } from './screen-detector.service';

describe('ScreenDetectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScreenDetectorService]
    });
  });

  it('should be created', inject([ScreenDetectorService], (service: ScreenDetectorService) => {
    expect(service).toBeTruthy();
  }));
});
