import { TestBed } from '@angular/core/testing';

import { OrderRepositoryService } from './order-repository.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('OrderRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      RouterTestingModule
    ]
  }));

  it('should be created', () => {
    const service: OrderRepositoryService = TestBed.get(OrderRepositoryService);
    expect(service).toBeTruthy();
  });
});
