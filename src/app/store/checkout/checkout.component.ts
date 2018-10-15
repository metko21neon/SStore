import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from '../../model/order.model';
import { OrderService } from '../../model/core/order.service';
import { OrderRepositoryService } from '../../model/core/order.repository.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {
  public orderSent = false;
  public submitted = false;
  // public orders: Order;
  constructor( public repository: OrderRepositoryService,
               public order: OrderService) {}

  ngOnInit() {}
  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.repository.saveOrder(this.order).subscribe(order => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }
  getValidationMessages(state: any, thingName?: string) {
    const thing: string = state.path || thingName;
    const messages: string[] = [];
    if (state.errors) {
      for (const errorName in state.errors) {
        switch (errorName) {
          case 'required':
            messages.push(`You must enter a ${thing}`);
            break;
          case 'minlength':
            messages.push(`A ${thing} must be at least ${state.errors['minlength'].requiredLength} characters`);
            break;
          case 'pattern':
            messages.push(`The ${thing} contains illegal characters`);
            break;
        }
      }
    }
    return messages;
  }
}
