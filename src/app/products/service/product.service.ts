import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../shared/data/product';

@Injectable()
export class ProductService {
  public pageSize = 100;
  public pageNumber = 0;
  constructor() { }
  getProducts(filter = '',sortColumn='', sortOrder = 'asc',
  pageNumber = this.pageNumber, pageSize = this.pageSize): Observable<Product[]>  {
    throw new Error('Method not implemented.');
  }
  
  getProduct(id: number) :  Observable<Product> {
    throw new Error('Method not implemented.');
  }

  getPrompts(inputText: string): Array<string> {
    throw new Error('Method not implemented.');
  }
 

}
