import { Component, OnInit } from '@angular/core';
import { OrderRepositoryService } from '../../model/core/order.repository.service';
import { Order } from '../../model/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit {
  includeShipped = false;
  constructor(private repository: OrderRepositoryService) { }

  ngOnInit() {
  }
  getOrders(): Order[] {
    return this.repository.getOrders()
      .filter(o => this.includeShipped || !o.shipped);
  }
  markShipped(order: Order) {
    order.shipped = true;
    this.repository.updateOrder(order);
  }
  delete(id: number) {
    this.repository.deleteOrder(id);
  }
}
