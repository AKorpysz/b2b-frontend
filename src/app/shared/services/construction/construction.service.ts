import { Injectable } from '@angular/core';
import { ConstructionServiceMock } from '../../../mocks/construction.mock.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConstructionService {
  private dataService: ConstructionServiceMock;
  constructor() {
    // TODO: zamienić na odpowiedni serwis
    this.dataService = new ConstructionServiceMock();
   }

  getConstructions(): Observable<string[]> {
    return this.dataService.getConstructions();
  }
}
