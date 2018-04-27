import { Status } from './status';

export class OrderPosition {
  id: number;
  externalNumberTrade: string;
  externalNumberSa: string;
  status: Status;
  construction: string;
  responsiblePerson: string;
  dateCreation: Date;
  dateLimit: Date;
}
