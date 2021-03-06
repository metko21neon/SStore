import { TestBed } from '@angular/core/testing';

import { ProductDetailResolverService } from './product-detail-resolver.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('ProductDetailResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      RouterTestingModule
    ]}));

  it('should be created', () => {
    const service: ProductDetailResolverService = TestBed.get(ProductDetailResolverService);
    expect(service).toBeTruthy();
  });
});
