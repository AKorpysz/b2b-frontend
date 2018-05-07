import { TestBed, inject } from '@angular/core/testing';

import { ConstructionService } from './construction.service';
import { ConstructionServiceMock } from '../../../mocks/construction.mock.service';

describe('ConstructionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ {provide: ConstructionService, useClass: ConstructionServiceMock }]
    });
  });

  it('should be created', inject([ConstructionService], (service: ConstructionService) => {
    expect(service).toBeTruthy();
  }));

  it('should provide constructions', inject([ConstructionService], (service: ConstructionService) => {
    let constructions: Array<string>;
    service.getConstructions().subscribe(x => constructions = x);
    expect(constructions).toBeDefined();
    expect(constructions.length).toBeGreaterThan(0);
  }));
});
