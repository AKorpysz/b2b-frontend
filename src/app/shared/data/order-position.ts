import { Status } from './status';
import { Product } from './product';

export class OrderPosition {
  id: number;
  product: Product;
  idDocument: number;
  amount: number;
  discount: number;
  suspectedDate: Date;
  price: string;
  currency: string;
  notes: string;
}
