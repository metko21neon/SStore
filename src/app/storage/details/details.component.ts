import { Component, OnInit } from '@angular/core';
import { CartService, CartLine } from '../../model/core/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'quantity', 'product', 'price', 'subtotal', 'delete'];
  constructor(public cart: CartService) { }

  ngOnInit() {
  }

}