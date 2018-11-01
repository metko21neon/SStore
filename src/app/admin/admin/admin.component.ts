import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../model/core/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {}
  logout() {
    this.auth.clear();
    this.router.navigateByUrl('/store');
  }

}
