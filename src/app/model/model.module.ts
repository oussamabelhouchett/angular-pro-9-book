import { Order } from './order.model';
import { NgModule } from "@angular/core";
import { Cart } from './cart.model';
import { OrderRepository } from './order.repository';
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
@NgModule({
  imports: [HttpClientModule],
 providers: [ProductRepository, StaticDataSource,Cart,OrderRepository,Order,
  ,{ provide: StaticDataSource, useClass: RestDataSource },AuthService,RestDataSource]
})
export class ModelModule { }
