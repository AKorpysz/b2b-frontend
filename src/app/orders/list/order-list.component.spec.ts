import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListComponent } from './order-list.component';
import { SearchService } from '../../shared/services/search/search.service';
import { SearchServiceMock } from '../../mocks/search.mock.service';
import { SearchComponent } from '../../shared/components/search/search.component';
import { MaterialModule } from '../../shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScreenDetectorService } from '../../shared/services/screen-detector/screen-detector.service';
import { ScreenDetectorMock } from '../../mocks/screen-detector.mock.service';

describe('OrderListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule,   BrowserAnimationsModule ],
      declarations: [ OrderListComponent, SearchComponent ],
      providers: [
        { provide: SearchService, useClass: SearchServiceMock },
        { provide: ScreenDetectorService, useClass: ScreenDetectorMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
