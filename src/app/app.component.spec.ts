import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { TestHelperService } from './shared/utils/test-helper.service';
import { MaterialModule } from './shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScreenDetectorService } from './shared/services/screen-detector/screen-detector.service';
import { ScreenDetectorMock } from './mocks/screen-detector.mock.service';
import { APP_BASE_HREF } from '@angular/common';
import { MainViewDesktopComponent } from './main-view/desktop/main-view-desktop.component';
import { MainViewMobileComponent } from './main-view/mobile/main-view-mobile.component';
import { MenuButtonComponent } from './shared/components/menu-button/menu-button.component';
describe('AppComponent', () => {
  const routes: Routes = [];
  let testService: TestHelperService<AppComponent>;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockDetector: ScreenDetectorMock;
  beforeEach(async(() => {
    mockDetector = new ScreenDetectorMock();
    TestBed.configureTestingModule({
      imports: [MaterialModule,  RouterModule.forRoot(routes), BrowserAnimationsModule ],
      declarations: [AppComponent, MainViewDesktopComponent, MainViewMobileComponent, MenuButtonComponent],
      providers: [
        { provide: ScreenDetectorService, useValue: mockDetector},
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testService = new TestHelperService(fixture);
  });
  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    component.title = 'app';
    fixture.detectChanges();
    expect(component.title).toEqual('app');
  }));

  it('should exist mobile view for small screens', async(() => {
    mockDetector.isMobileFlag = true;
    fixture.detectChanges();
    testService.checkElementExist('#main-view-mobile');
  }));

  it('should not exist mobile view for bigger screens', async(() => {
    mockDetector.isMobileFlag = false;
    fixture.detectChanges();
    testService.checkElementNotExist('#main-view-mobile');
  }));

  it('should exist desktop view for bigger screens', async(() => {
    mockDetector.isMobileFlag = false;
    fixture.detectChanges();
    testService.checkElementExist('#main-view-desktop');
  }));

  it('should not exist desktop view for small screens', async(() => {
    mockDetector.isMobileFlag = true;
    fixture.detectChanges();
    testService.checkElementNotExist('#main-view-desktop');
  }));
});
