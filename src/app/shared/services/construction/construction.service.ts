import { Injectable } from '@angular/core';
import { ConstructionServiceMock } from '../../../mocks/construction.mock.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConstructionService {
  
  // TODO: zamienić na docelowy serwis http
  constructor(private dataService: ConstructionServiceMock) {   
   }

  getConstructions(): Observable<string[]> {
    return this.dataService.getConstructions();
  }
}
