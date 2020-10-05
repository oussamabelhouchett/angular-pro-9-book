import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cartSummary.component';
import { CartDetailComponent } from './cartDetail.component';
import { CheckoutComponent } from './checkout.component';
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from '../storeFirst.guard';
@NgModule({
 imports: [ModelModule, BrowserModule, FormsModule,
  RouterModule.forRoot([
    { path: "store", component: StoreComponent ,
    canActivate: [StoreFirstGuard]},
    { path: "cart", component: CartDetailComponent ,canActivate: [StoreFirstGuard]},
    { path: "checkout", component: CheckoutComponent,canActivate: [StoreFirstGuard] },
    { path: "**", redirectTo: "/store" }
    ])],
 declarations: [StoreComponent,CounterDirective,CartSummaryComponent,CartDetailComponent, CheckoutComponent],
 exports: [StoreComponent,CartDetailComponent, CheckoutComponent],
 providers: [StoreFirstGuard],
})
export class StoreModule { }
