import { TestBed, inject } from '@angular/core/testing';

import { OrdersService } from './orders.service';
import { OrdersServiceMock, ORDERS } from '../../mocks/orders.mock.service';
import { of } from 'rxjs/observable/of';
import { Order } from '../../shared/data/order';
import { Status } from '../../shared/data/status';

describe('OrdersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: OrdersService,useClass: OrdersServiceMock}]
    });
  });

  it('should be created', inject([OrdersService], (service: OrdersService) => {
    expect(service).toBeTruthy();
  }));

  it('should get orders',  inject([OrdersService], (service: OrdersService) =>{
    const orders = service.getOrders();    
    expect(orders).toEqual(of(ORDERS));
  }));

  it('should get single order', inject([OrdersService], (service: OrdersService) =>{
    const order = service.getOrder(1);
    var mockService= new OrdersServiceMock();
    expect(order).toEqual(mockService.getOrder(1));
  }));

  it('should get prompts for search', inject([OrdersService], (service: OrdersService) =>{
    const prompts = service.getPrompts('Test');
    expect(prompts.length).toBe(2);
  }));

  it('should get empty prompts for search', inject([OrdersService], (service: OrdersService) =>{
    const prompts = service.getPrompts(null);
    expect(prompts.length).toBe(0);
  }));

  it('should create new order', inject([OrdersService], (service: OrdersService) =>{
    expect(service.getCreatedOrder$()).toBeNull();
    service.createOrder();
    let subscription = service.getCreatedOrder$();
    let createdOrder: Order;
    subscription.subscribe( x=> createdOrder = x );
    expect(createdOrder).toBeDefined();  
    expect(createdOrder.id).toBe(0);    
  }));

  it('should remove created order', inject([OrdersService], (service: OrdersService) =>{
    if(!service.getCreatedOrder$()) {
      service.createOrder();
    }
    expect(service.getCreatedOrder$()).toBeDefined();
    service.removeCreatedOrder();
    expect(service.getCreatedOrder$()).toBeNull();
  }));

  it('should edit existing order', inject([OrdersService], (service: OrdersService) =>{   
    service.removeCreatedOrder();   
    expect(service.getCreatedOrder$()).toBeNull();
    var editedOrder =new Order();
    editedOrder.id = 5;
    editedOrder.status = Status.IN_PROGRESS;
    service.editOrder(editedOrder);
    let subscription = service.getCreatedOrder$();
    let createdOrder: Order;
    subscription.subscribe( x=> createdOrder = x );
    expect(createdOrder).toBeDefined();
    expect(createdOrder).toBe(editedOrder);    
  }));

  it('should throw error when wrong status', inject([OrdersService], (service: OrdersService) =>{
    service.removeCreatedOrder();   
    expect(service.getCreatedOrder$()).toBeNull();
    var editedOrder =new Order();  
    editedOrder.status = Status.ACCEPTED;
    expect(function(){service.editOrder(editedOrder)}).toThrow(new Error('Edited order should have status InProgres'));     
  }));

  it('should throw error when empty', inject([OrdersService], (service: OrdersService) =>{    
    service.removeCreatedOrder();    
    expect(service.getCreatedOrder$()).toBeNull(); 
    expect( function(){service.editOrder(null)}).toThrow(new Error('Edited order cannot be empty'));     
  }));
});
