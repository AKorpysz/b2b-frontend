import { TestBed, inject } from '@angular/core/testing';

import { ConstructionService } from './construction.service';
import { ConstructionServiceMock } from '../../../mocks/construction.mock.service';

describe('ConstructionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ {provide: ConstructionService,useClass: ConstructionServiceMock }]
    });
  });

  it('should be created', inject([ConstructionService], (service: ConstructionService) => {
    expect(service).toBeTruthy();
  }));

  it('should provide constructions', () => {
    fail();
  });
});
