import {Component, Input, OnInit} from '@angular/core';
import {AppComponent} from '../../app.component';
import {CommonService} from '../../model/core/common.service';

import {AuthService} from '../../model/core/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  @Input() snav: AppComponent;
  public header: string;
  constructor(private common: CommonService,
              private auth: AuthService) { }

  ngOnInit() {}
  public changeHeader(header) {
    this.common.changeHeader(header);
  }
  public logout() {
    this.auth.clear();
  }
}
