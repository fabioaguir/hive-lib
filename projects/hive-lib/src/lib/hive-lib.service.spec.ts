import { TestBed } from '@angular/core/testing';

import { HiveLibService } from './hive-lib.service';

describe('HiveLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HiveLibService = TestBed.get(HiveLibService);
    expect(service).toBeTruthy();
  });
});
