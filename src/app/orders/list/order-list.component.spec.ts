import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit, Input } from '@angular/core';
import { OrderListComponent } from './order-list.component';
import { SearchService } from '../../shared/services/search/search.service';
import { SearchServiceMock } from '../../mocks/search.mock.service';
import { SearchComponent } from '../../shared/components/search/search.component';
import { MaterialModule } from '../../shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScreenDetectorService } from '../../shared/services/screen-detector/screen-detector.service';
import { ScreenDetectorMock } from '../../mocks/screen-detector.mock.service';
import { OrdersService } from '../service/orders.service';
import { OrdersServiceMock } from '../../mocks/orders.mock.service';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestHelperService } from '../../shared/utils/test-helper.service';
import { OrderStatus } from '../../shared/data/order-status';
import { OrderStatusPipe } from '../../shared/pipes/order-status/order-status.pipe';
import { FormsModule } from '@angular/forms';

describe('OrderListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;
  let mockDetector: ScreenDetectorMock;
  let testService: TestHelperService<OrderListComponent>;
  const routes: Routes = [];
  beforeEach(async(() => {
    mockDetector = new ScreenDetectorMock();
    TestBed.configureTestingModule({
      imports: [MaterialModule,   BrowserAnimationsModule, FormsModule, RouterModule.forRoot(routes), ],
      declarations: [ OrderListComponent, SearchComponent, OrderStatusPipe ],
      providers: [
        { provide: SearchService, useClass: SearchServiceMock },
        { provide: ScreenDetectorService, useClass: ScreenDetectorMock },
        { provide: OrdersService, useClass: OrdersServiceMock},
        { provide: APP_BASE_HREF, useValue : '/' },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testService = new TestHelperService(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have 8 columns', () => {
    const headerName = 'mat-header-row';
    testService.checkElementExistByCss(headerName);
    expect(testService.getChildrenLenghtOfForCssName(headerName)).toEqual(8);
  });

  it('should contain pagination ', () => {
    testService.checkElementExist('mat-paginator');
  });

  it('should contain sorting', () => {
    testService.checkAttributeExist('mat-table', 'matsort');
  });

  it('should have default color font for null status', () => {
    expect(component.getColor(null)).toEqual('black');
  });

  it('should have warn color font for waiting status', () => {
    expect(component.getColor(OrderStatus.WAITING)).toEqual('yellow');
  });

  it('should have error color font for rejected status', () => {
    expect(component.getColor(OrderStatus.REJECTED)).toEqual('red');
  });

  it('should have error color font for error status', () => {
    expect(component.getColor(OrderStatus.ERROR)).toEqual('red');
  });

  it('should have accepted color font for accepted status', () => {
    expect(component.getColor(OrderStatus.ACCEPTED)).toEqual('green');
  });
});
