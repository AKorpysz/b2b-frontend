import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MainViewDesktopComponent } from './main-view/desktop/main-view-desktop.component';
import { MainViewMobileComponent } from './main-view/mobile/main-view-mobile.component';
import { LoginComponent } from './login/login/login.component';
import { LoginBadgeComponent } from './login/login-badge/login-badge.component';
import { OrderAddComponent } from './orders/add/order-add.component';
import { OrderDetailsComponent } from './orders/detail/order-details.component';
import { OrderExcelComponent } from './orders/excel/order-excel.component';
import { ProductAddComponent } from './products/add/product-add.component';
import { OrderVeryficationComponent } from './orders/veryfication/order-veryfication.component';
import { OrderListComponent } from './orders/list/order-list.component';
import { ProductDetailsComponent } from './products/details/product-details.component';
import { MenuButtonComponent } from './shared/components/menu-button/menu-button.component';
import { SearchComponent } from './shared/components/search/search.component';
import { OrderStatusPipe } from './shared/pipes/order-status/order-status.pipe';
import { OrdersService } from './orders/service/orders.service';
import { ProductService } from './products/service/product.service';
import { ScreenDetectorService } from './shared/services/screen-detector/screen-detector.service';
import { LoginService } from './login/service/login.service';
import { MaterialModule } from './shared/material/material.module';
import { AppRoutingModule } from './shared/routing/routing.module';
import { ProductListComponent } from './products/list/product-list.component';
import 'hammerjs';
import { SearchService } from './shared/services/search/search.service';
import { OrdersServiceMock } from './mocks/orders.mock.service';
@NgModule({
  declarations: [
    AppComponent,
    MainViewDesktopComponent,
    MainViewMobileComponent,
    LoginComponent,
    LoginBadgeComponent,
    OrderAddComponent,
    OrderDetailsComponent,
    OrderExcelComponent,
    ProductAddComponent,
    OrderVeryficationComponent,
    OrderListComponent,
    ProductListComponent,
    ProductDetailsComponent,
    MenuButtonComponent,
    SearchComponent,
    OrderStatusPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [
    OrdersService,
    ProductService,
    ScreenDetectorService,
    SearchService,
    LoginService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
