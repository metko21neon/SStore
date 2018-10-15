import { TestBed } from '@angular/core/testing';

import { Order.RepositoryService } from './order.repository.service';

describe('Order.RepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Order.RepositoryService = TestBed.get(Order.RepositoryService);
    expect(service).toBeTruthy();
  });
});
