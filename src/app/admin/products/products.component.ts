import {Component, OnInit, ViewChild} from '@angular/core';
import { ProductRepositoryService } from '../../model/core/product-repository.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {RestDatasourceService} from '../../model/core/rest-datasourse.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  public dataSource;
  public displayedColumns: string[] = ['id', 'name', 'category', 'price', 'button'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private repository: ProductRepositoryService,
              private data: RestDatasourceService) { }

  ngOnInit() {
    this.getProducts();
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
  deleteProduct(id: number) {
    this.repository.deleteProduct(id);
    this.getProducts();
  }
}
