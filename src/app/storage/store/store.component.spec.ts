import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreComponent } from './store.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProductDetailsComponent} from '../product-details/product-details.component';
import {StoreGuard} from '../store.guard';
import {ProductDetailResolverService} from '../../model/core/product-detail-resolver.service';
import {CommonModule} from '@angular/common';

describe('StoreComponent', () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreComponent, ProductDetailsComponent ],
      imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        RouterTestingModule.withRoutes([
          { path: 'product/:id', component: ProductDetailsComponent },
        ]),
        HttpClientModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
