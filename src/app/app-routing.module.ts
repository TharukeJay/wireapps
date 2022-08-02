import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./componants/login/login.component";
import {DashboardComponent} from "./componants/dashboard/dashboard.component";
import {DetailPageComponent} from "./componants/detail-page/detail-page.component";
import {CartComponent} from "./componants/cart/cart.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detailPage', component: DetailPageComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    HttpClientModule]
})
export class AppRoutingModule { }
