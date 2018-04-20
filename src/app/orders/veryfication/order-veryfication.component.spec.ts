import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderVeryficationComponent } from './order-veryfication.component';

describe('OrderVeryficationComponent', () => {
  let component: OrderVeryficationComponent;
  let fixture: ComponentFixture<OrderVeryficationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderVeryficationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderVeryficationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
