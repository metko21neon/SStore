import { TestBed } from '@angular/core/testing';

import { ProductRepositoryService } from './product-repository.service';
import {HttpClientModule} from '@angular/common/http';

describe('ProductRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]}));

  it('should be created', () => {
    const service: ProductRepositoryService = TestBed.get(ProductRepositoryService);
    expect(service).toBeTruthy();
  });
});
