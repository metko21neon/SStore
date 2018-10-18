import {Component, Input, OnInit} from '@angular/core';
import {AppComponent} from '../../app.component';
import {ProductRepositoryService} from '../../model/core/product-repository.service';
import {CommonService} from '../../model/core/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  @Input() snav: AppComponent;
  public header: string;
  constructor(private common: CommonService) { }

  ngOnInit() {}
  changeHeader(header) {
    this.common.changeHeader(header);
  }
}
