import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import { Product } from '../../model/product.model';

import { CartService } from '../../model/core/cart.service';
import {CommonService} from '../../model/core/common.service';
import {RestDatasourceService} from '../../model/core/rest-datasourse.service';

import {Observable} from 'rxjs';
import {Store, select} from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromProduct from '../../store/reducers/product.reducer';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.sass']
})
export class StoreComponent implements OnInit {
  public products$: Observable<Product[]>;
  public dataSource;
  public displayedColumns: string[] = ['id', 'name', 'category', 'description', 'price'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor( private store: Store<fromStore.State>,
               private cart: CartService,
               private common: CommonService,
               private data: RestDatasourceService) {}

  ngOnInit() {
    this.getProducts();
    /*this.store.dispatch(new fromStore.LoadProducts());
    this.products$ = this.store.pipe(select(fromProduct.selectAll));*/
    /*this.dataSource = new MatTableDataSource(this.products$);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;*/
  }
  getProducts() {
    this.data.getProducts().subscribe( data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(filterValue: string = null) {
    this.data.getProducts().subscribe( data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.filter = filterValue.trim().toLowerCase();
      this.dataSource.paginator = this.paginator;
    });
  }
  addProductToCart(product: Product) {
    this.cart.addLine(product);
  }
}
