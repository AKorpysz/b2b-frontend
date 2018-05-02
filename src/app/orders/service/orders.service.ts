import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { OrdersServiceMock } from '../../mocks/orders.mock.service';
import { Order } from '../../shared/data/order';
import { OrderFlat } from '../../shared/data/order-flat';
import { Status } from '../../shared/data/status';


@Injectable()
export class OrdersService {
  private editedOrder: Order;
  // TODO: zmienić mock na rzeczywisty serwis
  constructor(private dataService: OrdersServiceMock) {
  }

  editOrder(order: Order) {
    if(!order){ 
      throw new Error('Edited order cannot be empty');
    }
    if(order.status !== Status.IN_PROGRESS) {
      throw new Error('Edited order should have status InProgres');
    }
    this.editedOrder = order;
  }
  removeCreatedOrder() {
    if (this.editedOrder) {
      this.editedOrder = null;
    }
  }
  getCreatedOrder$(): Observable<Order> {
    if (this.editedOrder) {
      return of(this.editedOrder);
    }
    return null;
  }
  createOrder() {
    this.editedOrder = new Order();
    this.editedOrder.status = Status.IN_PROGRESS;
    this.editedOrder.id = 0;
  }
  getOrders(): Observable<OrderFlat[]> {
    return this.dataService.getOrders();
  }

  getOrder(id: number): Observable<Order> {
    return this.dataService.getOrder(id);
  }
  getPrompts(inputText: string): Array<string> {
    if (inputText) {
      return this.dataService.getPrompts(inputText);
    }
    return new Array<string>();
  }
}
