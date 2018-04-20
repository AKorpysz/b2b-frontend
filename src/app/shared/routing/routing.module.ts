import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from '../../orders/list/order-list.component';
import { OrderDetailsComponent } from '../../orders/detail/order-details.component';
import { ProductListComponent } from '../../products/list/product-list.component';
import { ProductDetailsComponent } from '../../products/details/product-details.component';
import { LoginComponent } from '../../login/login/login.component';
import { OrderAddComponent } from '../../orders/add/order-add.component';
import { ProductAddComponent } from '../../products/add/product-add.component';


const routes: Routes = [
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: 'orders', component: OrderListComponent },
  { path: 'order/:id', component: OrderDetailsComponent },
  { path: 'order/add', component: OrderAddComponent },
  { path: 'products', component: ProductListComponent},
  { path: 'product/:id', component: ProductDetailsComponent},
  { path: 'product/add', component: ProductAddComponent },
  { path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

