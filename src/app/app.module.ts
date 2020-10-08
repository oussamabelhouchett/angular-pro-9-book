import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from './store/StoreModule.module';
import { StoreComponent } from './store/store.component';
import { StoreFirstGuard } from './storeFirst.guard';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutComponent } from './store/checkout.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule,

    RouterModule.forRoot([
      { path: "store", component: StoreComponent ,
      canActivate: [StoreFirstGuard]},
      { path: "cart", component: CartDetailComponent ,canActivate: [StoreFirstGuard]},
      { path: "checkout", component: CheckoutComponent,canActivate: [StoreFirstGuard] },
      { path: "admin",
        loadChildren: () => import("./admin/admin.module")
        .then(m => m.AdminModule),
        canActivate: [StoreFirstGuard]
        },
      { path: "**", redirectTo: "/store" }
      ]),

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [StoreComponent,CartDetailComponent, CheckoutComponent],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
