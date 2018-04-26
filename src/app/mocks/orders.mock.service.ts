import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { Order } from '../shared/data/order';
import { OrderStatus } from '../shared/data/order-status';
export const ORDERS: Order[] = [
  {id: 1, externalNumberTrade: 'test number A1', externalNumberSa: 'test number B1', status: OrderStatus.ACCEPTED, construction: 'Budowa 1', responsiblePerson: 'osoba 1', dateCreation: new Date(2019, 8, 1, 13, 7, 2), dateLimit: new Date(2045, 8, 2, 13, 7, 2)  },
  {id: 2, externalNumberTrade: 'test number A2', externalNumberSa: 'test number B2', status: OrderStatus.ERROR, construction: 'Budowa 2', responsiblePerson: 'osoba 2', dateCreation: new Date(2022, 7, 2, 13, 7, 2), dateLimit: new Date(2045, 8, 2, 13, 7, 2)  },
  {id: 3, externalNumberTrade: 'test number A3', externalNumberSa: 'test number B3', status: OrderStatus.WAITING, construction: 'Budowa 1', responsiblePerson: 'osoba 2', dateCreation: new Date(2031, 6, 3, 13, 7, 2), dateLimit: new Date(2045, 8, 2, 13, 7, 2)  },
  {id: 4, externalNumberTrade: 'test number A4', externalNumberSa: 'test number B4', status: OrderStatus.ACCEPTED, construction: 'Budowa 1', responsiblePerson: 'osoba 2', dateCreation: new Date(2015, 5, 4, 13, 7, 2), dateLimit: new Date(2045, 8, 2, 13, 7, 2)  },
  {id: 5, externalNumberTrade: 'test number A5', externalNumberSa: 'test number B5', status: OrderStatus.ACCEPTED, construction: 'Budowa 3', responsiblePerson: 'osoba 2', dateCreation: new Date(2023, 4, 5, 13, 7, 2), dateLimit: new Date(2045, 8, 2, 13, 7, 2)  },
  {id: 6, externalNumberTrade: 'test number A6', externalNumberSa: 'test number B6', status: OrderStatus.REJECTED, construction: 'Budowa 2', responsiblePerson: 'osoba 4', dateCreation: new Date(2041, 3, 6, 13, 7, 2), dateLimit: new Date(2045, 8, 2, 13, 7, 2)  },
  {id: 7, externalNumberTrade: 'test number A7', externalNumberSa: 'test number B7', status: OrderStatus.ACCEPTED, construction: 'Budowa 2', responsiblePerson: 'osoba 3', dateCreation: new Date(2015, 2, 7, 13, 7, 2), dateLimit: new Date(2045, 8, 2, 13, 7, 2)  },
  {id: 8, externalNumberTrade: 'test number A8', externalNumberSa: 'test number B8', status: OrderStatus.ACCEPTED, construction: 'Budowa 3', responsiblePerson: 'osoba 3', dateCreation: new Date(2013, 1, 8, 13, 7, 2), dateLimit: new Date(2045, 8, 2, 13, 7, 2)  },
  {id: 9, externalNumberTrade: 'test number A9', externalNumberSa: 'test number B9', status: OrderStatus.ERROR, construction: 'Budowa 1', responsiblePerson: 'osoba 3', dateCreation: new Date(2009, 9, 9, 13, 7, 2), dateLimit: new Date(2045, 8, 2, 13, 7, 2)  },
  {id: 10, externalNumberTrade: 'test number A10', externalNumberSa: 'test number B10', status: OrderStatus.ACCEPTED, construction: 'Budowa 2', responsiblePerson: 'osoba 1', dateCreation: new Date(2007, 10, 10, 13, 7, 2), dateLimit: new Date(2045, 8, 2, 13, 7, 2)  },
  {id: 11, externalNumberTrade: 'test number A11', externalNumberSa: 'test number B11', status: OrderStatus.ACCEPTED, construction: 'Budowa 5', responsiblePerson: 'osoba 1', dateCreation: new Date(2012, 11, 11, 13, 7, 2), dateLimit: new Date(2045, 8, 2, 13, 7, 2)  },
  {id: 12, externalNumberTrade: 'test number A12', externalNumberSa: 'test number B12', status: OrderStatus.ACCEPTED, construction: 'Budowa 6', responsiblePerson: 'osoba 4', dateCreation: new Date(2017, 12, 12, 13, 7, 2), dateLimit: new Date(2045, 8, 2, 13, 7, 2)  },
  {id: 13, externalNumberTrade: 'test number A13', externalNumberSa: 'test number B13', status: OrderStatus.ACCEPTED, construction: 'Budowa 7', responsiblePerson: 'osoba 4', dateCreation: new Date(2015, 1, 2, 13, 7, 2), dateLimit: new Date(2045, 8, 2, 13, 7, 2)  },
  {id: 14, externalNumberTrade: 'test number A14', externalNumberSa: 'test number B14', status: OrderStatus.ACCEPTED, construction: 'Budowa 1', responsiblePerson: 'osoba 4', dateCreation: new Date(2016, 2, 2, 14, 7, 2), dateLimit: new Date(2045, 8, 2, 13, 7, 2)  },
  {id: 15, externalNumberTrade: 'test number A15', externalNumberSa: 'test number B15', status: OrderStatus.ERROR, construction: 'Budowa 2', responsiblePerson: 'osoba 1', dateCreation: new Date(2043, 3, 2, 15, 7, 2), dateLimit: new Date(2045, 8, 2, 13, 7, 2)  },
  {id: 16, externalNumberTrade: 'test number A16', externalNumberSa: 'test number B16', status: OrderStatus.ACCEPTED, construction: 'Budowa 3', responsiblePerson: 'osoba 2', dateCreation: new Date(2045, 4, 2, 16, 7, 2), dateLimit: new Date(2045, 8, 2, 13, 7, 2)  },
  {id: 17, externalNumberTrade: 'test number A17', externalNumberSa: 'test number B17', status: OrderStatus.ACCEPTED, construction: 'Budowa 2', responsiblePerson: 'osoba 2', dateCreation: new Date(2076, 5, 2, 17, 7, 2), dateLimit: new Date(2045, 8, 2, 13, 7, 2)  },
  {id: 18, externalNumberTrade: 'test number A18', externalNumberSa: 'test number B18', status: OrderStatus.ACCEPTED, construction: 'Budowa 1', responsiblePerson: 'osoba 1', dateCreation: new Date(2001, 6, 2, 18, 7, 2), dateLimit: new Date(2045, 8, 2, 13, 7, 2)  },
  {id: 19, externalNumberTrade: 'test number A19', externalNumberSa: 'test number B19', status: OrderStatus.REJECTED, construction: 'Budowa 1', responsiblePerson: 'osoba 3', dateCreation: new Date(2008, 7, 2, 19, 7, 2), dateLimit: new Date(2045, 8, 2, 13, 7, 2)  },
  {id: 20, externalNumberTrade: 'test number A20', externalNumberSa: 'test number B20', status: OrderStatus.ACCEPTED, construction: 'Budowa 6', responsiblePerson: 'osoba 1', dateCreation: new Date(2001, 8, 2, 20, 7, 2), dateLimit: new Date(2045, 8, 2, 13, 7, 2)  },
  {id: 21, externalNumberTrade: 'test number A21', externalNumberSa: 'test number B21', status: OrderStatus.ACCEPTED, construction: 'Budowa 5', responsiblePerson: 'osoba 3', dateCreation: new Date(2000, 9, 2, 21, 7, 2), dateLimit: new Date(2045, 8, 2, 13, 7, 2)  },
];

export class OrdersServiceMock {
  getOrders(): Observable<Order[]> {
    return of(ORDERS);
  }

  getOrder(id: number) {
    return of(ORDERS.find(x => x.id === id));
  }
}

