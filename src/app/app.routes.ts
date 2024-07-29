import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'summary', component: OrderSummaryComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
