import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../model/core/auth.service';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  constructor(private store: Store<fromStore.State>,
              private auth: AuthService,
              private router: Router) { }

  ngOnInit() {}
  logout() {
    this.auth.clear();
    this.router.navigateByUrl('/store');
  }

}
