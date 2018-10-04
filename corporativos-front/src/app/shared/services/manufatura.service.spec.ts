import { TestBed, inject } from '@angular/core/testing';

import { ManufaturaService } from './manufatura.service';

describe('ManufaturaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManufaturaService]
    });
  });

  it('should be created', inject([ManufaturaService], (service: ManufaturaService) => {
    expect(service).toBeTruthy();
  }));
});
