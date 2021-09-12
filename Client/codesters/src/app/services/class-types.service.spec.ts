import { TestBed } from '@angular/core/testing';

import { ClassTypesService } from './class-types.service';

describe('ClassTypesService', () => {
  let service: ClassTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
