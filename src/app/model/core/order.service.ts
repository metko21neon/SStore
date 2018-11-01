import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { Order } from '../order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public id: number;
  public name: string;
  public surname: string;
  public email: string;
  public phone: string;
  public address: string;
  public city: string;
  public postalCode: string;
  public country: string;
  public shipped: boolean = false;
  constructor(public cart: CartService) { }

  clear() {
    this.id = null;
    this.name = this.address = this.city = null;
    this.surname = this.email = this.phone = null;
    this.postalCode = this.country = null;
    this.shipped = false;
    this.cart.clear();
  }
}
