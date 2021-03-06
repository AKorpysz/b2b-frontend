import { Component, OnInit, ViewChild } from '@angular/core';
import { Status } from '../../shared/data/status';
import { Order } from '../../shared/data/order';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { OrdersService } from '../service/orders.service';
import { SearchService } from '../../shared/services/search/search.service';
import { Router } from '@angular/router';
import { Unsubscriber } from '../../shared/decorators/unsubscriber';
import { OrderFlat } from '../../shared/data/order-flat';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
@Unsubscriber
export class OrderListComponent implements OnInit {
  dataSource = new MatTableDataSource<OrderFlat>();
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private ordersService: OrdersService, public searchService: SearchService, private router: Router) { }
  public selectedRowIndex = -1;
  private orderSubscription: Subscription;
  private searchSubscription: Subscription;
  private getPropmptsSubscription: Subscription;
  private colorWarn = 'yellow';
  private colorOk = 'green';
  private colorError = 'red';
  private colorDefault = 'black';

  displayedColumns = [
    'id',
   'externalNumberTrade',
   'externalNumberSa',
   'status',
   'construction',
   'aplicant',
   'deciding',
   'creationDate',
   'suspectedDate',
   'realisationDate',
   'amountConfirmed',
   'amountRejected',
   'producers',
  ];

  ngOnInit(): void {
    let orders = new Array<OrderFlat>();
    this.orderSubscription = this.ordersService.getOrders().subscribe(x => orders = x);
    this.dataSource = new MatTableDataSource(orders);
    this.getPropmptsSubscription = this.searchService.isDataNeeded$.subscribe(x => this.getPrompts(x));
    this.searchSubscription = this.searchService.searchFinishedData$.subscribe(x => this.search(x));
  }

  getColor(status: Status) {
    if (!status) {
      return this.colorDefault;
    }
    switch (status) {
      case Status.WAITING:
        return this.colorWarn;
      case Status.REJECTED:
      case Status.ERROR:
        return this.colorError;
      case Status.ACCEPTED:
        return this.colorOk;
      default:
        return this.colorDefault;
    }
  }

  onRowClick(row) {
    const shouldRedirect = row.id === this.selectedRowIndex;
    this.selectedRowIndex = row.id;
    // console.log(shouldRedirect);
    if (shouldRedirect) {
      // console.log('Routed !');
      this.router.navigate(['/order', row.id]);
    }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  search(phrase: string) {
    // console.log('OrdersListComponent: ustawiam filtr dla frazy ' + phrase);
    phrase = phrase.trim();
    phrase = phrase.toLowerCase();
    this.dataSource.filter = phrase;
  }

  getPrompts(phrase: string) {
    // console.log('OrdersListComponent: zwracam podpowiedzi dla ' + phrase);
    // TODO: serwis z podpowiedziami
    this.searchService.setHintsData([
      'Budowa 1',
      'osoba 3'
    ]);
  }

}
