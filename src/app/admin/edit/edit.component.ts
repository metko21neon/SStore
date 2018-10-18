import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../../model/product.model';
import { ProductRepositoryService } from '../../model/core/product-repository.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {
  editing = false;
  product: Product = new Product();
  constructor(private repository: ProductRepositoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.editing = activatedRoute.snapshot.params['mode'] === 'edit';
    if (this.editing) {
      Object.assign(this.product, repository.getProductById(activatedRoute.snapshot.params['id']));
    }
  }
  ngOnInit() {
  }
  get categories(): string[] {
    return this.repository.getCategories();
  }
  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/products');
  }

}
