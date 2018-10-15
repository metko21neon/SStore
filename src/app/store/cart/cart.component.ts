import { Component, OnInit } from '@angular/core';
import { CartService } from '../../model/core/cart.service';
import {CommonService} from '../../model/core/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  constructor( public cart: CartService,
               private common: CommonService) { }

  ngOnInit() {
  }
  changeHeader(header) {
    this.common.changeHeader(header);
  }
}
