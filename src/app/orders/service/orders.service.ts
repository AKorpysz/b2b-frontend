import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { OrdersServiceMock } from '../../mocks/orders.mock.service';
import { Order } from '../../shared/data/order';


@Injectable()
export class OrdersService {
  private dataService: OrdersServiceMock;
  constructor() {
    // TODO: zmienić mock na rzeczywisty serwis
    this.dataService = new  OrdersServiceMock();
   }

  getOrders(): Observable<Order[]> {
    return this.dataService.getOrders();
  }

  getOrder(id: number): Observable<Order> {
    return this.dataService.getOrder(id);
  }
}
