import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { Subscription } from 'rxjs/Subscription';

import { Order } from '../../shared/data/order';
import { Status } from '../../shared/data/status';
import { Unsubscriber } from '../../shared/decorators/unsubscriber';
import { ConstructionService } from '../../shared/services/construction/construction.service';
import { OrdersService } from '../service/orders.service';
import { MatTableDataSource } from '@angular/material';
import { Attachment } from '../../shared/data/attachment';
import { OrderPosition } from '../../shared/data/order-position';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
@Unsubscriber
export class OrderDetailsComponent implements OnInit {
  private orderSubscription: Subscription;
  private constructionSubscription: Subscription;
  public order: Order;
  public statuses: number[];
  public idsTrade =  new MatTableDataSource<[string, Date]>();
  public idsSa =  new MatTableDataSource<[string, Date]>();
  public attachments =  new MatTableDataSource<Attachment>();
  public orders =  new MatTableDataSource<OrderPosition>();
  // todo zamienić na osobną kontrolkę
  public constructions: string[];
  public filteredConstructions: Observable<string[]>;
  public constructionAutocompleteForm: FormControl = new FormControl();
  private fileToUpload: File = null;
  arrayBuffer: any;
  public fileData: any;
  displayedNumberColumns = [
   'nameId',
   'dateId'
  ];
  displayedAttachmentColumns = [
    'nameId'
   ];
   displayedOrdersColumns = [
    'id',
    'code',
    'amount',
    'discount',
    'suspectedDate',
    'price',
    'currency',
    'notes'
   ];

  constructor(
    private ordersService: OrdersService,
    private route: ActivatedRoute,
    private constructionService: ConstructionService
  ) {
    this.statuses = Object.keys(Status)
      .map(k => Status[k])
      .filter(v => typeof v === 'number') as number[];
    this.constructionSubscription = constructionService
      .getConstructions()
      .subscribe(x => (this.constructions = x));
  }

  ngOnInit() {
    // tymczasowo dopoki sie nie naucze przesylac onOnInit w unit testach
    if (!this.order) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.orderSubscription = this.ordersService
        .getOrder(id)
        .subscribe(x => (this.order = x));
      this.filteredConstructions = this.constructionAutocompleteForm.valueChanges.pipe(
        startWith(''),
        map(val => this.filterConstructions(val))
      );
      this.idsTrade = new MatTableDataSource(this.order.idTrade);
      this.idsSa = new MatTableDataSource(this.order.idSa);
      this.attachments = new MatTableDataSource(this.order.attachments);
      this.orders = new MatTableDataSource(this.order.orders);
    }
  }

  private filterConstructions(val: string): string[] {
    return this.constructions.filter(
      option => option.toLowerCase().indexOf(val.toLowerCase()) === 0
    );
  }

  public loadData() {}

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
    this.Upload();
  }

  Upload() {
    /* const fileReader = new FileReader();
    fileReader.onload = (e) => {
        this.arrayBuffer = fileReader.result;
        const data = new Uint8Array(this.arrayBuffer);
        const arr = new Array();
        for (let i = 0; i !== data.length; ++i) { arr[i] = String.fromCharCode(data[i]); }
        const bstr = arr.join('');
        const workbook = XLSX.read(bstr, {type: 'binary'});
        const first_sheet_name = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[first_sheet_name];
        const jsonObj = XLSX.utils.sheet_to_json(worksheet, {raw: true});
        console.log(jsonObj);
        this.fileData = jsonObj;
    };
    fileReader.readAsArrayBuffer(this.fileToUpload); */
  }
}
