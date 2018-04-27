import { Status } from './status';

export class OrderFlat {
  id: number;
  externalNumberTrade: string;
  externalNumberSa: string;
  status: Status;
  construction: string;
  aplicant: string;
  deciding: string;
  suspectedDate: Date;
  creationDate: Date;
  realisationDate: Date;
  producers: string;
  amountConfirmed: number;
  amountRejected: number;
}
