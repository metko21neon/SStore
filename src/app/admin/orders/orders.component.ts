import {Component, OnInit, ViewChild} from '@angular/core';
import { OrderRepositoryService } from '../../model/core/order-repository.service';
import { Order } from '../../model/order.model';
import {MatSort} from '@angular/material';
import {RestDatasourceService} from '../../model/core/rest-datasourse.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit {
  public includeShipped: boolean = false;
  public displayedColumns: string[] = ['id', 'name', 'phone', 'price', 'button'];
  public dataSource;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private repository: OrderRepositoryService,
              private data: RestDatasourceService) { }

  ngOnInit() {
  }
  public getOrders(): Order[] {
    return this.repository.getOrders().filter(order => order.shipped === this.includeShipped);
  }
  public markShipped(order: Order) {
    order.shipped = true;
    this.repository.updateOrder(order);
  }
  public delete(id: number) {
    this.repository.deleteOrder(id);
  }
}
