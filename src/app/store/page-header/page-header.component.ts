import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../model/core/common.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.sass']
})
export class PageHeaderComponent implements OnInit {
  public header: string = 'All categories';
  constructor(public common: CommonService) {
    this.common.headerObservable$.subscribe(category => this.header = category);
  }

  ngOnInit() {
  }

}
