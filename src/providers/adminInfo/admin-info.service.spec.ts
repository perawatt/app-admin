import { TestBed } from '@angular/core/testing';

import { AdminInfo } from './admin-info.service';

describe('AdminInfoService', () => {
  let service: AdminInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminInfo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
