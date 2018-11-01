import { TestBed } from '@angular/core/testing';

import { RestDatasourceService } from './rest-datasourse.service';
import {HttpClientModule} from '@angular/common/http';

describe('RestDatasourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: RestDatasourceService = TestBed.get(RestDatasourceService);
    expect(service).toBeTruthy();
  });
});
