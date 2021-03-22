import { TestBed } from '@angular/core/testing';

import { DataFunctionsService } from './data-functions.service';

describe('DataFunctionsService', () => {
  let service: DataFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
