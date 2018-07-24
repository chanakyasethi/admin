import { TestBed, inject } from '@angular/core/testing';

import { QuesIdsService } from './ques-ids.service';

describe('QuesIdsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuesIdsService]
    });
  });

  it('should be created', inject([QuesIdsService], (service: QuesIdsService) => {
    expect(service).toBeTruthy();
  }));
});
