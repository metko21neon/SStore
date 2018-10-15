import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../product.model';
import { Order } from '../order.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const PROTOCOL = 'http';
const PORT = 3500;

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
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }
  saveProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders().set('Authorization', `Bearer<${this.auth_token}>`);
    return this.http.post(this.baseUrl + 'products', product, {headers});
  }
  updateProduct(product): Observable<Product> {
    const headers = new HttpHeaders().set('Authorization', `Bearer<${this.auth_token}>`);
    return this.http.put(this.baseUrl + `products/${product.id}`, product, {headers});
  }
  deleteProduct(id: number): Observable<Product> {
    const headers = new HttpHeaders().set('Authorization', `Bearer<${this.auth_token}>`);
    return this.http.delete(this.baseUrl + `products/${id}`, {headers});
  }
  getOrders(): Observable<Order[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer<${this.auth_token}>`);
    return this.http.get<Order[]>(this.baseUrl + 'orders', {headers});
  }
  deleteOrder(id: number): Observable<Order> {
    const headers = new HttpHeaders().set('Authorization', `Bearer<${this.auth_token}>`);
    return this.http.delete<Order>(this.baseUrl + `orders/${id}`, {headers});
  }
  updateOrder(order: Order): Observable<Order> {
    const headers = new HttpHeaders().set('Authorization', `Bearer<${this.auth_token}>`,);
    return this.http.put<Order>(this.baseUrl + `orders/${order.id}`, order, {headers});
  }
  saveOrder(order: Order): Observable < Order > {
    return this.http.post<Order>(this.baseUrl + 'orders', order);
  }
}
