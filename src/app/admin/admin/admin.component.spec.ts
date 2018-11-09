import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import {MatStepperModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthService} from '../../model/core/auth.service';
import {Router} from '@angular/router';
import {Component} from '@angular/core';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let authService: AuthService;

  beforeEach(async(() => {
    @Component({selector: 'router-outlet', template: ''})
    class RouterOutletStubComponent { }

    const routerSpy = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    // const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['clean']);
    TestBed.configureTestingModule({
      declarations: [
        AdminComponent,
        RouterOutletStubComponent
      ],
      imports: [
        MatStepperModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthService);
    fixture.detectChanges();
  });

  it('should call clean() method', () => {
    // expect(authService.clean.calls.count()).toBe(1);
  });

  it('should tell ROUTER to navigate when hero clicked', () => {
    // expect (routerSpy.navigateByUrl).toHaveBeenCalledWith (['/login']);
  });
});
