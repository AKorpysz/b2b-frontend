import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../../shared/data/product';
import { Subscribable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Unsubscriber } from '../../shared/decorators/unsubscriber';
import { MatTableDataSource } from '@angular/material';
import { SearchService } from '../../shared/services/search/search.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
@Unsubscriber
export class ProductListComponent implements OnInit {
  private getPropmptsSubscription: Subscription;
  private searchSubscription: Subscription;
  public dataSource: MatTableDataSource<Product>;
  public resultsLength = 0;
  displayedColumns = [
    'code',
    'name',
    'price',
    'currency',
    'unit',
    'producer',
    'basket'
  ];
  constructor(
    private productsService: ProductService,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    const products = new Array<Product>();
    // this.productSubscription = this.productsService.getProducts$().subscribe(x => products = x);
    this.dataSource = new MatTableDataSource(products);
    this.getPropmptsSubscription = this.searchService.isDataNeeded$.subscribe(
      x => this.getPrompts(x)
    );
    this.searchSubscription = this.searchService.searchFinishedData$.subscribe(
      x => this.search(x)
    );
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
    this.searchService.setHintsData(['Budowa 1', 'osoba 3']);
  }

  addToBasket(prod: Product) {
    throw new Error('Not implementd');
  }
}
