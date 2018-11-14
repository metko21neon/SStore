import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import { Order } from '../order.model';
import {IProduct, Product} from '../product.model';

const PROTOCOL = 'http';
const PORT = 3500;

interface Country {
  name: string;
  code: string;
}

@Injectable({
  providedIn: 'root'
})
export class RestDatasourceService {
  public baseUrl: string;
  public auth_token: string;
  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  authenticate(user: string, pass: string): Observable <boolean> {
    return this.http.post(this.baseUrl + 'login', { name: user, password: pass }).pipe(map( (response: Response) => {
      this.auth_token = response['success'] ? response['token'] : null;
      return response['success'];
    }));
  }
  getToken(): string {
    return this.auth_token;
  }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseUrl + 'products')
      .pipe(catchError((error: any) => {
        return throwError(error);
      }));
  }
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/all')
      .pipe(catchError((error: any) => {
        return throwError(error);
      }));
  }
  saveProduct(product: Product): Observable<Product> {
    return this.http.post(this.baseUrl + 'products', product)
    .pipe(catchError((error: any) => {
        return throwError(error);
      }));
  }
  updateProduct(product: Product): Observable<Product> {
    return this.http.put(this.baseUrl + `products/${product.id}`, product)
      .pipe(catchError((error: any) => {
        return throwError(error);
      }));
  }
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete(this.baseUrl + `products/${id}`)
      .pipe(catchError((error: any) => {
        return throwError(error);
      }));
  }
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + 'orders')
      .pipe(catchError((error: any) => {
        return throwError(error);
      }));
  }
  deleteOrder(id: number): Observable<Order> {
    return this.http.delete<Order>(this.baseUrl + `orders/${id}`)
      .pipe(catchError((error: any) => {
        return throwError(error);
      }));
  }
  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(this.baseUrl + `orders/${order.id}`, order)
      .pipe(catchError((error: any) => {
        return throwError(error);
      }));
  }
  saveOrder(order: Order): Observable < Order > {
    return this.http.post<Order>(this.baseUrl + 'orders', order)
      .pipe(catchError((error: any) => {
        return throwError(error);
      }));
  }
}
