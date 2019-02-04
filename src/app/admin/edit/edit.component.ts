import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IProduct, Product} from '../../model/product.model';
import { ProductRepositoryService } from '../../model/core/product-repository.service';
import { ActivatedRoute, Router } from '@angular/router';
import {DialogService} from '../../model/core/dialog.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {
  public editing = false;
  public product: Product = new Product();
  public editForm: FormGroup;
  constructor(private repository: ProductRepositoryService,
              private router: Router,
              private formBuilder: FormBuilder,
              private dialogService: DialogService,
              private activatedRoute: ActivatedRoute) {
    this.editing = activatedRoute.snapshot.params['mode'] === 'edit';
    if (this.editing) {
      Object.assign(this.product, repository.getProductById(activatedRoute.snapshot.params['id']));
      console.log(repository.getProductById(activatedRoute.snapshot.params['id']));
    }
    this.editForm = this.formBuilder.group({
      id: [this.product.id],
      name: [this.product.name],
      category: [this.product.category],
      description: [this.product.description],
      price: [this.product.price]
    });
  }

  ngOnInit() {}
  get categories(): string[] {
    return this.repository.getCategories();
  }
  public save(form) {
    this.repository.saveProduct(form.value);
    this.router.navigateByUrl('/admin');
  }
  canDeactivate(): Observable<boolean> | boolean {
    if (!this.categories && this.editForm.dirty) {
      return true;
    }
    return this.dialogService.confirm('Discard changes?');
  }
}
