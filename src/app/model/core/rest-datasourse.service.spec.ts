import { TestBed } from '@angular/core/testing';

import { RestDatasourceService } from './rest-datasourse.service';

describe('RestDatasourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestDatasourceService = TestBed.get(RestDatasourceService);
    expect(service).toBeTruthy();
  });
});
