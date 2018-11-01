import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Product } from '../../model/product.model';
import { ProductRepositoryService } from '../../model/core/product-repository.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs';
import {DialogService} from '../../model/core/dialog.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {
  editing = false;
  product: Product = new Product();
  public editForm: FormGroup;
  constructor(private repository: ProductRepositoryService,
              private router: Router,
              private formBuilder: FormBuilder,
              private dialogService: DialogService,
              private activatedRoute: ActivatedRoute) {
    this.editing = activatedRoute.snapshot.params['mode'] === 'edit';
    if (this.editing) {
      Object.assign(this.product, repository.getProductById(activatedRoute.snapshot.params['id']));
    }
    this.editForm = this.formBuilder.group({
      id: [this.product.id],
      name: [this.product.name],
      category: [this.product.category],
      description: [this.product.description],
      price: [this.product.price]
    });
  }

  ngOnInit() {
  }
  get categories(): string[] {
    return this.repository.getCategories();
  }
  public save(form) {
    this.product = form.value;
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin');
  }
  canDeactivate(): Observable<boolean> | boolean {
    if (!this.categories && this.editForm.dirty) {
      return true;
    }
    return this.dialogService.confirm('Discard changes?');
  }
}
