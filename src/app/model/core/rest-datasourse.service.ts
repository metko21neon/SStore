import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../product.model';
import { Order } from '../order.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/all');
  }
  saveProduct(product: Product): Observable<Product> {
    return this.http.post(this.baseUrl + 'products', product);
  }
  updateProduct(product): Observable<Product> {
    return this.http.put(this.baseUrl + `products/${product.id}`, product);
  }
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete(this.baseUrl + `products/${id}`);
  }
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + 'orders');
  }
  deleteOrder(id: number): Observable<Order> {
    return this.http.delete<Order>(this.baseUrl + `orders/${id}`);
  }
  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(this.baseUrl + `orders/${order.id}`, order);
  }
  saveOrder(order: Order): Observable < Order > {
    return this.http.post<Order>(this.baseUrl + 'orders', order);
  }
}
