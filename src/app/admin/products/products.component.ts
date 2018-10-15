import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductRepositoryService } from '../../model/core/product-repository.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  constructor(private repository: ProductRepositoryService) { }

  ngOnInit() {
  }
  getProducts(): Product[] {
    return this.repository.getProducts();
  }
  deleteProduct(id: number) {
    this.repository.deleteProduct(id);
  }
}
