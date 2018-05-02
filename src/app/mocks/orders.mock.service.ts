import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Order } from '../shared/data/order';
import { Status } from '../shared/data/status';
import { OrderFlat } from '../shared/data/order-flat';
import { ConstructionInfo } from '../shared/data/construction-info';
import { User } from '../shared/data/user';
import { Attachment } from '../shared/data/attachment';
import { PRODUCTS } from './products.mock.service';
import { OrderPosition } from '../shared/data/order-position';
import { Injectable } from '@angular/core';
export const ORDERS: OrderFlat[] = [
  {
    id: 1,
    externalNumberTrade: 'test number A1',
    externalNumberSa: 'test number B1',
    status: Status.ACCEPTED,
    construction: 'Budowa 1',
    aplicant: 'osoba 1',
    deciding: 'osoba 2',
    creationDate: new Date(2019, 8, 1, 13, 7, 2),
    realisationDate: new Date(2045, 8, 2, 13, 7, 2),
    suspectedDate: new Date(2045, 8, 2, 13, 7, 2),
    amountConfirmed: 9,
    amountRejected: 0,
    producers: 'SIEMENS, FANUC'
  },
  {
    id: 2,
    externalNumberTrade: 'test number A2',
    externalNumberSa: 'test number B2',
    status: Status.ERROR,
    construction: 'Budowa 2',
    aplicant: 'osoba 2',
    deciding: 'osoba 3',
    creationDate: new Date(2022, 7, 2, 13, 7, 2),
    realisationDate: new Date(2045, 8, 2, 13, 7, 2),
    suspectedDate: new Date(2045, 8, 2, 13, 7, 2),
    amountConfirmed: 1,
    amountRejected: 1,
    producers: 'SIEMENS, FANUC'
  },
  {
    id: 3,
    externalNumberTrade: 'test number A3',
    externalNumberSa: 'test number B3',
    status: Status.WAITING,
    construction: 'Budowa 1',
    aplicant: 'osoba 2',
    deciding: 'osoba 3',
    creationDate: new Date(2031, 6, 3, 13, 7, 2),
    realisationDate: new Date(2045, 8, 2, 13, 7, 2),
    suspectedDate: new Date(2045, 8, 2, 13, 7, 2),
    amountConfirmed: 2,
    amountRejected: 2,
    producers: 'SIEMENS, FANUC'
  },
  {
    id: 4,
    externalNumberTrade: 'test number A4',
    externalNumberSa: 'test number B4',
    status: Status.ACCEPTED,
    construction: 'Budowa 1',
    aplicant: 'osoba 2',
    deciding: 'osoba 5',
    creationDate: new Date(2015, 5, 4, 13, 7, 2),
    realisationDate: new Date(2045, 8, 2, 13, 7, 2),
    suspectedDate: new Date(2045, 8, 2, 13, 7, 2),
    amountConfirmed: 3,
    amountRejected: 0,
    producers: 'SIEMENS, FANUC'
  },
  {
    id: 5,
    externalNumberTrade: 'test number A5',
    externalNumberSa: 'test number B5',
    status: Status.ACCEPTED,
    construction: 'Budowa 3',
    aplicant: 'osoba 2',
    deciding: 'osoba 6',
    creationDate: new Date(2023, 4, 5, 13, 7, 2),
    realisationDate: new Date(2045, 8, 2, 13, 7, 2),
    suspectedDate: new Date(2045, 8, 2, 13, 7, 2),
    amountConfirmed: 4,
    amountRejected: 0,
    producers: 'SIEMENS, FANUC'
  },
  {
    id: 6,
    externalNumberTrade: 'test number A6',
    externalNumberSa: 'test number B6',
    status: Status.REJECTED,
    construction: 'Budowa 2',
    aplicant: 'osoba 4',
    deciding: 'osoba 7',
    creationDate: new Date(2041, 3, 6, 13, 7, 2),
    realisationDate: new Date(2045, 8, 2, 13, 7, 2),
    suspectedDate: new Date(2045, 8, 2, 13, 7, 2),
    amountConfirmed: 5,
    amountRejected: 23,
    producers: 'SIEMENS, FANUC'
  },
  {
    id: 7,
    externalNumberTrade: 'test number A7',
    externalNumberSa: 'test number B7',
    status: Status.ACCEPTED,
    construction: 'Budowa 2',
    aplicant: 'osoba 3',
    deciding: 'osoba 8',
    creationDate: new Date(2015, 2, 7, 13, 7, 2),
    realisationDate: new Date(2045, 8, 2, 13, 7, 2),
    suspectedDate: new Date(2045, 8, 2, 13, 7, 2),
    amountConfirmed: 6,
    amountRejected: 0,
    producers: 'SIEMENS, FANUC'
  },
  {
    id: 8,
    externalNumberTrade: 'test number A8',
    externalNumberSa: 'test number B8',
    status: Status.ACCEPTED,
    construction: 'Budowa 3',
    aplicant: 'osoba 3',
    deciding: 'osoba 11',
    creationDate: new Date(2013, 1, 8, 13, 7, 2),
    realisationDate: new Date(2045, 8, 2, 13, 7, 2),
    suspectedDate: new Date(2045, 8, 2, 13, 7, 2),
    amountConfirmed: 7,
    amountRejected: 0,
    producers: 'SIEMENS, FANUC'
  },
  {
    id: 9,
    externalNumberTrade: 'test number A9',
    externalNumberSa: 'test number B9',
    status: Status.ERROR,
    construction: 'Budowa 1',
    aplicant: 'osoba 3',
    deciding: 'osoba 1',
    creationDate: new Date(2009, 9, 9, 13, 7, 2),
    realisationDate: new Date(2045, 8, 2, 13, 7, 2),
    suspectedDate: new Date(2045, 8, 2, 13, 7, 2),
    amountConfirmed: 8,
    amountRejected: 7,
    producers: 'SIEMENS, FANUC'
  },
  {
    id: 10,
    externalNumberTrade: 'test number A10',
    externalNumberSa: 'test number B10',
    status: Status.ACCEPTED,
    construction: 'Budowa 2',
    aplicant: 'osoba 1',
    deciding: 'osoba 2',
    creationDate: new Date(2007, 10, 10, 13, 7, 2),
    realisationDate: new Date(2045, 8, 2, 13, 7, 2),
    suspectedDate: new Date(2045, 8, 2, 13, 7, 2),
    amountConfirmed: 9,
    amountRejected: 0,
    producers: 'SIEMENS, FANUC'
  },
  {
    id: 11,
    externalNumberTrade: 'test number A11',
    externalNumberSa: 'test number B11',
    status: Status.ACCEPTED,
    construction: 'Budowa 5',
    aplicant: 'osoba 1',
    deciding: 'osoba 3',
    creationDate: new Date(2012, 11, 11, 13, 7, 2),
    realisationDate: new Date(2045, 8, 2, 13, 7, 2),
    suspectedDate: new Date(2045, 8, 2, 13, 7, 2),
    amountConfirmed: 2,
    amountRejected: 0,
    producers: 'SIEMENS, FANUC'
  },
  {
    id: 12,
    externalNumberTrade: 'test number A12',
    externalNumberSa: 'test number B12',
    status: Status.ACCEPTED,
    construction: 'Budowa 6',
    aplicant: 'osoba 4',
    deciding: 'osoba 3',
    creationDate: new Date(2017, 12, 12, 13, 7, 2),
    realisationDate: new Date(2045, 8, 2, 13, 7, 2),
    suspectedDate: new Date(2045, 8, 2, 13, 7, 2),
    amountConfirmed: 3,
    amountRejected: 2,
    producers: 'SIEMENS, FANUC'
  },
  {
    id: 13,
    externalNumberTrade: 'test number A13',
    externalNumberSa: 'test number B13',
    status: Status.ACCEPTED,
    construction: 'Budowa 7',
    aplicant: 'osoba 4',
    deciding: 'osoba 2',
    creationDate: new Date(2015, 1, 2, 13, 7, 2),
    realisationDate: new Date(2045, 8, 2, 13, 7, 2),
    suspectedDate: new Date(2045, 8, 2, 13, 7, 2),
    amountConfirmed: 4,
    amountRejected: 0,
    producers: 'SIEMENS, FANUC'
  },
  {
    id: 14,
    externalNumberTrade: 'test number A14',
    externalNumberSa: 'test number B14',
    status: Status.ACCEPTED,
    construction: 'Budowa 1',
    aplicant: 'osoba 4',
    deciding: 'osoba 2',
    creationDate: new Date(2016, 2, 2, 14, 7, 2),
    realisationDate: new Date(2045, 8, 2, 13, 7, 2),
    suspectedDate: new Date(2045, 8, 2, 13, 7, 2),
    amountConfirmed: 1,
    amountRejected: 0,
    producers: 'SIEMENS, FANUC'
  },
  {
    id: 15,
    externalNumberTrade: 'test number A15',
    externalNumberSa: 'test number B15',
    status: Status.ERROR,
    construction: 'Budowa 2',
    aplicant: 'osoba 1',
    deciding: 'osoba 1',
    creationDate: new Date(2043, 3, 2, 15, 7, 2),
    realisationDate: new Date(2045, 8, 2, 13, 7, 2),
    suspectedDate: new Date(2045, 8, 2, 13, 7, 2),
    amountConfirmed: 2,
    amountRejected: 1,
    producers: 'SIEMENS, FANUC'
  },
  {
    id: 16,
    externalNumberTrade: 'test number A16',
    externalNumberSa: 'test number B16',
    status: Status.ACCEPTED,
    construction: 'Budowa 3',
    aplicant: 'osoba 2',
    deciding: 'osoba 3',
    creationDate: new Date(2045, 4, 2, 16, 7, 2),
    realisationDate: new Date(2045, 8, 2, 13, 7, 2),
    suspectedDate: new Date(2045, 8, 2, 13, 7, 2),
    amountConfirmed: 4,
    amountRejected: 0,
    producers: 'SIEMENS, FANUC'
  },
  {
    id: 17,
    externalNumberTrade: 'test number A17',
    externalNumberSa: 'test number B17',
    status: Status.ACCEPTED,
    construction: 'Budowa 2',
    aplicant: 'osoba 2',
    deciding: 'osoba 7',
    creationDate: new Date(2076, 5, 2, 17, 7, 2),
    realisationDate: new Date(2045, 8, 2, 13, 7, 2),
    suspectedDate: new Date(2045, 8, 2, 13, 7, 2),
    amountConfirmed: 1,
    amountRejected: 4,
    producers: 'SIEMENS, FANUC'
  },
  {
    id: 18,
    externalNumberTrade: 'test number A18',
    externalNumberSa: 'test number B18',
    status: Status.ACCEPTED,
    construction: 'Budowa 1',
    aplicant: 'osoba 1',
    deciding: 'osoba 8',
    creationDate: new Date(2001, 6, 2, 18, 7, 2),
    realisationDate: new Date(2045, 8, 2, 13, 7, 2),
    suspectedDate: new Date(2045, 8, 2, 13, 7, 2),
    amountConfirmed: 1,
    amountRejected: 0,
    producers: 'SIEMENS, FANUC'
  },
  {
    id: 19,
    externalNumberTrade: 'test number A19',
    externalNumberSa: 'test number B19',
    status: Status.REJECTED,
    construction: 'Budowa 1',
    aplicant: 'osoba 3',
    deciding: 'osoba 9',
    creationDate: new Date(2008, 7, 2, 19, 7, 2),
    realisationDate: new Date(2045, 8, 2, 13, 7, 2),
    suspectedDate: new Date(2045, 8, 2, 13, 7, 2),
    amountConfirmed: 3,
    amountRejected: 1,
    producers: 'SIEMENS, FANUC'
  },
  {
    id: 20,
    externalNumberTrade: 'test number A20',
    externalNumberSa: 'test number B20',
    status: Status.ACCEPTED,
    construction: 'Budowa 6',
    aplicant: 'osoba 1',
    deciding: 'osoba 10',
    creationDate: new Date(2001, 8, 2, 20, 7, 2),
    realisationDate: new Date(2045, 8, 2, 13, 7, 2),
    suspectedDate: new Date(2045, 8, 2, 13, 7, 2),
    amountConfirmed: 4,
    amountRejected: 0,
    producers: 'SIEMENS, FANUC'
  },
  {
    id: 21,
    externalNumberTrade: 'test number A21',
    externalNumberSa: 'test number B21',
    status: Status.ACCEPTED,
    construction: 'Budowa 5',
    aplicant: 'osoba 3',
    deciding: 'osoba 11',
    creationDate: new Date(2000, 9, 2, 21, 7, 2),
    realisationDate: new Date(2045, 8, 2, 13, 7, 2),
    suspectedDate: new Date(2045, 8, 2, 13, 7, 2),
    amountConfirmed: 7,
    amountRejected: 0,
    producers: 'SIEMENS, FANUC'
  }
];
@Injectable()
export class OrdersServiceMock {
  private editedOrder: Order;
  getPrompts(promptText: string): Array<string> {
    if(promptText) {
    return [
      'Budowa 5',
      'osoba 1'
    ];
    }
    return new Array<string>();
  }
  getOrders(): Observable<OrderFlat[]> {
    return of(ORDERS);
  }

  getOrder(id: number) {
    const result = new Order();
    result.id = 1;
    result.idSa =
      [
        ['SA/1/231', new Date(2018, 3, 14)],
        ['SA/4/235', new Date(2014, 3, 14)],
        ['B2B/21/237', new Date(2015, 3, 14)],
      ];
    result.idTrade =
      [
        ['Trade/1/231', new Date(2018, 3, 14)],
        ['Trade/4/235', new Date(2014, 3, 14)],
        ['B2B/22/237', new Date(2015, 3, 14)],
      ];
    result.status = Status.IN_PROGRESS;
    result.suspectedDate = new Date(2019, 1, 1);
    result.creationDate = new Date(2018, 4, 28);
    result.realisationDate = new Date(2018, 5, 1);
    result.notes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ';
    result.systemNotes = 'Zamowienie OK';
    result.construction = {
        id: 1,
        code: 'BUD/167/12',
        conserns: 'Umowa 1234',
        name: 'Budowa testowa',
        legalBasics: 'Podstawa prawna xyz',
        personResponsible: 'Osoba odpowiedzialna XYZ',
        shipment: 'Warszawa',
        technicalInformation: 'Osoba techniczna ABC',
        varrantySum: 1000,
        varranyLenght: 24
      };
    result.aplicant = 'User 1';
    result.deciding = 'User 2';
    result.attachments =
      [
        {
          id: 45,
          name: 'testowy zalacznik',
          extension: 'exe',
        },
        {
          id: 47,
          name: 'testowy zalacznik 2',
          extension: 'pdf',
        }
        ,
        {
          id: 49,
          name: 'testowy zalacznik 3',
          extension: 'png',
        }
      ];

    let amount = 1;
    let positions = Array<OrderPosition>();
    for (let prod of PRODUCTS) {
      let position = new OrderPosition();
      position.product = prod;
      position.amount = amount;
      position.price = prod.price;
      position.id = amount -1;
      position.notes = 'Testowe notatki lalal ';
      position.suspectedDate = new Date();
      position.discount = 20.0;  
      positions.fill(position);
      amount++;
    }
    result.orders = positions;

    return of(result);
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
}
