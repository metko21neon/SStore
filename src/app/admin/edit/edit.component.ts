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
              activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params['mode'] === 'edit';
    if (this.editing) {
      Object.assign(this.product,
        repository.getProduct(activeRoute.snapshot.params['id']));
    }
  }
  ngOnInit() {
  }
  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }

}
