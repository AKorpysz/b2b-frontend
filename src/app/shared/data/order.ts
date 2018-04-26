import { OrderStatus } from './order-status';

export class Order {
  id: number;
  externalNumberTrade: string;
  externalNumberSa: string;
  status: OrderStatus;
  construction: string;
  responsiblePerson: string;
  dateCreation: Date;
  dateLimit: Date;
}
