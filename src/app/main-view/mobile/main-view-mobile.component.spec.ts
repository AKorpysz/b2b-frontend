import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewMobileComponent } from './main-view-mobile.component';
import { MaterialModule } from '../../shared/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuButtonComponent } from '../../shared/components/menu-button/menu-button.component';
import { APP_BASE_HREF } from '@angular/common';
import { TestHelperService } from '../../shared/utils/test-helper.service';

describe('MainViewMobileComponent', () => {
  const routes: Routes = [];
  let testService: TestHelperService<MainViewMobileComponent>;
  let component: MainViewMobileComponent;
  let fixture: ComponentFixture<MainViewMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule,  RouterModule.forRoot(routes), BrowserAnimationsModule ],
      declarations: [MainViewMobileComponent, MenuButtonComponent ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testService = new TestHelperService(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exist orders button', () => {
    testService.checkElementExist('#button-orders');
  });

  it('should exist products button', () => {
    testService.checkElementExist('#button-products');
  });

  it('should exist basket component', () => {
    testService.checkElementExist('#button-add-order');
  });

  it('should exist settings button', () => {
    testService.checkElementExist('#button-settings');
  });

  it('should exist logout button', () => {
    testService.checkElementExist('#button-logout');
  });

  it('should exist button-basket ', () => {
    testService.checkElementExist('#button-basket');
  });

  it('should exist button-hamburger', () => {
    testService.checkElementExist('#button-hamburger');
  });

  it('should exist logo-image', () => {
    testService.checkElementExist('#logo-image');
  });
});
