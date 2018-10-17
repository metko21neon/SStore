import { Injectable } from '@angular/core';
import { Product } from '../product.model';
import { RestDatasourceService } from './rest-datasourse.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService {
  private products: Product[] = [];
  private categories: string[] = [];
  constructor(private dataSource: RestDatasourceService) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
    });
  }
  getProducts(): Product[] {
    return this.products;
  }
  getProduct(id: number | string) {
    return this.dataSource.getProducts().pipe(map((products: Product[]) => products.find(product => product.id === +id)));
  }
  getCategories(): string[] {
    return this.categories;
  }
  saveProduct(product: Product) {
    if (product.id == null || product.id === 0) {
      this.dataSource.saveProduct(product)
        .subscribe(p => this.products.push(p));
    } else {
      this.dataSource.updateProduct(product)
        .subscribe(p => {
          this.products.splice(this.products.findIndex(p => p.id === product.id), 1, product);
        });
    }
  }
  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe(p => {
      this.products.splice(this.products.
      findIndex(p => p.id === id), 1);
    });
  }
}
