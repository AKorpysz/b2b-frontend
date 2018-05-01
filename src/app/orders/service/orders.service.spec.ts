import { TestBed, inject } from '@angular/core/testing';

import { OrdersService } from './orders.service';

describe('OrdersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdersService]
    });
  });

  it('should be created', inject([OrdersService], (service: OrdersService) => {
    expect(service).toBeTruthy();
  }));

  it('should get orders', ()=>{
    fail();
  });

  it('should get single order', () => {
    fail();
  });

  it('should get prompts for search', () => {
    fail();
  });

  it('should create new order',()=>{
    fail();
  });

  it('should add new product to order',()=>{
    fail();
  });

  it('should change status order',()=>{
    fail();
  });
});
