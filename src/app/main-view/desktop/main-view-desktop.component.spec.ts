import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewDesktopComponent } from './main-view-desktop.component';
import { TestHelperService } from '../../shared/utils/test-helper.service';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuButtonComponent } from '../../shared/components/menu-button/menu-button.component';
import { APP_BASE_HREF } from '@angular/common';


describe('MainViewDesktopComponent', () => {
  const routes: Routes = [];
  let testService: TestHelperService<MainViewDesktopComponent>;
  let component: MainViewDesktopComponent;
  let fixture: ComponentFixture<MainViewDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule,  RouterModule.forRoot(routes), BrowserAnimationsModule ],
      declarations: [MainViewDesktopComponent, MenuButtonComponent ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewDesktopComponent);
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

});
