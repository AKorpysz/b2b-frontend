import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { TestHelperService } from '../../shared/utils/test-helper.service';
import { SearchComponent } from '../../shared/components/search/search.component';
import { MaterialModule } from '../../shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { ProductsServiceMock } from '../../mocks/products.mock.service';
import { SearchService } from '../../shared/services/search/search.service';
import { SearchServiceMock } from '../../mocks/search.mock.service';
import { ScreenDetectorService } from '../../shared/services/screen-detector/screen-detector.service';
import { ScreenDetectorMock } from '../../mocks/screen-detector.mock.service';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let testService: TestHelperService<ProductListComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule,   BrowserAnimationsModule, FormsModule, RouterTestingModule.withRoutes([]) ],
      declarations: [ ProductListComponent, SearchComponent ],
      providers: [
        { provide: ProductService, useClass: ProductsServiceMock},
        { provide: SearchService, useClass: SearchServiceMock},
        { provide: ScreenDetectorService, useClass: ScreenDetectorMock },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testService = new TestHelperService(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('contains search component', () => {
    testService.checkElementExist('#search-component');
  });

  it('should contain pagination ', () => {
    testService.checkElementExist('mat-paginator');
  });

  it('should contain sorting', () => {
    testService.checkAttributeExist('mat-table', 'matsort');
  });

  it('has seven columns', () => {
    const headerName = 'mat-header-row';
    testService.checkElementExistByCss(headerName);
    expect(testService.getChildrenLenghtOfForCssName(headerName)).toEqual(7);
  });
});
