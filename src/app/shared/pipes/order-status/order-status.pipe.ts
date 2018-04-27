import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '../../data/status';

@Pipe({
  name: 'orderStatus'
})
export class OrderStatusPipe implements PipeTransform {
  transform(value: Status): string {
    const noData = 'Brak danych';
    if (!value) {
      return noData;
    }
    switch (value) {
      case Status.ACCEPTED:
        return 'Zaakceptowane';
      case Status.ERROR:
        return 'Błąd systemu';
      case Status.REJECTED:
        return 'Odrzucone';
      case Status.WAITING:
        return 'W trakcie realizacji';
      default:
        return noData;
    }
  }
}
