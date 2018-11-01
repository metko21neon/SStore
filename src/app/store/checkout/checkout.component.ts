import { Component, OnInit } from '@angular/core';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import { OrderService } from '../../model/core/order.service';
import { OrderRepositoryService } from '../../model/core/order-repository.service';
import {RestDatasourceService} from '../../model/core/rest-datasourse.service';

interface Country {
  name: string;
  code: string;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {
  public selected: string;
  public countries: Country[];
  public cities;
  public orderSent: boolean = false;
  public submitted: boolean = false;
  public checkoutForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(15)]],
    surname: ['', [Validators.required, Validators.maxLength(15)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.maxLength(10)]],
    country: ['', Validators.required],
    city: ['', Validators.required],
    postalCode: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
    address: ['', [Validators.required, Validators.maxLength(200)]]
  });
  constructor( private repository: OrderRepositoryService,
               private dataSource: RestDatasourceService,
               private orderService: OrderService,
               private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.getCountries();
  }
  getCountries() {
    this.dataSource.getCountries().subscribe( data => this.countries = data);
  }
  getCities() {
    this.cities = this.countries.find( country => country.name === this.selected);
  }
  public submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.orderService.name = this.checkoutForm.get('name').value;
      this.orderService.surname = this.checkoutForm.get('surname').value;
      this.orderService.phone = this.checkoutForm.get('phone').value;
      this.orderService.email = this.checkoutForm.get('email').value;
      this.orderService.address = this.checkoutForm.get('address').value;
      this.orderService.country = this.checkoutForm.get('country').value;
      this.orderService.city = this.checkoutForm.get('city').value;
      this.orderService.postalCode = this.checkoutForm.get('postalCode').value;
      this.repository.saveOrder(this.orderService).subscribe(order => {
        this.orderService.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }
}
