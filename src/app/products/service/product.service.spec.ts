import { TestBed, inject } from '@angular/core/testing';

import { ProductService } from './product.service';
import { ProductsServiceMock, PRODUCTS } from '../../mocks/products.mock.service';
import { of } from 'rxjs/observable/of';
import { Product } from '../../shared/data/product';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ProductService, useClass: ProductsServiceMock}]
    });
  });

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));

  it('should simple get products', inject([ProductService], (service: ProductService) => {
    const products = service.getProducts();
    expect(products).toEqual(of(PRODUCTS));
  }));

  it('should work pagination', inject([ProductService], (service: ProductService) => {
    const page = 0;
    const limit = 1;
    const products = service.getProducts('','','',page,limit);
    expect(products).toBeDefined();
    let productResult: Array<Product>;
    products.subscribe(x => productResult = x);
    expect(productResult.length).toBe(limit);
    expect(productResult[0]).toEqual(PRODUCTS[0]);
  }));

  it('should work filtering', inject([ProductService], (service: ProductService) => {
    const filter = PRODUCTS[0].code;
    const products = service.getProducts(filter,'','');
    expect(products).toBeDefined();
    let productResult: Array<Product>;
    products.subscribe(x => productResult = x);
    expect(productResult[0]).toEqual(PRODUCTS[0]);
  }));

  it('should work sorting asc', inject([ProductService], (service: ProductService) => {
    const products = service.getProducts('','code','asc');
    expect(products).toBeDefined();
    let productResult: Array<Product>;
    products.subscribe(x => productResult = x);
    expect(productResult).toEqual(PRODUCTS);    
  }));

  it('should work sorting desc', inject([ProductService], (service: ProductService) => {
    let products = service.getProducts('','code','desc');
    let clonedProducts = PRODUCTS.map(x => Object.assign({}, x));
    expect(products).toBeDefined();
    let productResult: Array<Product>;   
    products.subscribe(x => productResult = x);   
    expect(productResult).toEqual(clonedProducts);   
  }));

  it('should get single product', inject([ProductService], (service: ProductService) => {
    let productResult: Product;
    service.getProduct( PRODUCTS[5].id).subscribe(x => productResult = x);
    expect(productResult).toEqual(PRODUCTS[5]);    
  }));

  it('should get empty prompts for search', inject([ProductService], (service: ProductService) => {
    const prompts = service.getPrompts(null);
    expect(prompts.length).toBe(0);
  }));

  it('should get  prompts for search', inject([ProductService], (service: ProductService) => {
    const prompts = service.getPrompts('Test');
    expect(prompts.length).toBe(2);
  }));
});
