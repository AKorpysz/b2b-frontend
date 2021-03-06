import { ConstructionInfo } from './construction-info';
import { User } from './user';
import { Status } from './status';
import { OrderPosition } from './order-position';
import { Attachment } from './attachment';

export class Order {
  id: number;
  status: Status;
  construction: ConstructionInfo;
  aplicant: string;
  deciding: string;
  suspectedDate: Date;
  creationDate: Date;
  realisationDate: Date;
  notes: string;
  systemNotes: string;
  idSa: Array<[string, Date]>;
  idTrade:  Array<[string, Date]>;
  orders: OrderPosition[];
  attachments:  Array<Attachment>;
}
