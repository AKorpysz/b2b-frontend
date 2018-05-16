import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  getProducts(filter = '', sortOrder = 'asc',
  pageNumber = 0, pageSize = 100): any {
    throw new Error('Method not implemented.');
  }

  getProductLimit() {
    throw new Error('Not implementd exception');
  }
  constructor() { }

}
