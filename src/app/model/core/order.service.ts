import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { Order } from '../order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  /*private orders: Order;*/
  public id: number;
  public name: string;
  public surname: string;
  public email: string;
  public phone: string;
  public address: string;
  public city: string;
  public state: string;
  public zip: string;
  public country: string;
  public shipped: boolean = false;
  constructor(public cart: CartService) { }

  clear() {
    this.id = null;
    this.name = this.address = this.city = null;
    this.state = this.zip = this.country = null;
    this.shipped = false;
    this.cart.clear();
  }
}
