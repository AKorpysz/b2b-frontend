import { TestBed, inject } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService]
    });
  });

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));

  it('should simple get products', () => {
    fail();
  });

  it('should work pagination', () => {
    fail();
  });

  it('should work filtering', () => {
    fail();
  });

  it('should work sorting', () => {
    fail();
  });

  it('should get single product', () => {
    fail();
  });
  
  it('should get prompts for search', () => {
    fail();
  });
});
