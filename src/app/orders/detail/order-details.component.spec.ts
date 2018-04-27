import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsComponent } from './order-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../shared/material/material.module';
import { OrderStatusPipe } from '../../shared/pipes/order-status/order-status.pipe';
import { OrdersService } from '../service/orders.service';
import { OrdersServiceMock } from '../../mocks/orders.mock.service';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { ConstructionServiceMock } from '../../mocks/construction.mock.service';
import { ConstructionService } from '../../shared/services/construction/construction.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Order } from '../../shared/data/order';
describe('OrderDetailsComponent', () => {
  let component: OrderDetailsComponent;
  let fixture: ComponentFixture<OrderDetailsComponent>;
  // tslint:disable-next-line:prefer-const
  let order: Order;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, BrowserAnimationsModule, ReactiveFormsModule, MaterialModule, RouterTestingModule.withRoutes([])],
      declarations: [ OrderDetailsComponent, OrderStatusPipe ],
      providers: [
        { provide: OrdersService, useClass: OrdersServiceMock},
        { provide: ConstructionService, useClass: ConstructionServiceMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    this.order = new Order();
    fixture = TestBed.createComponent(OrderDetailsComponent);
    component = fixture.componentInstance;
    component.order = this.order;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
