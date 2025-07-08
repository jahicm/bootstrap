import { TestBed } from '@angular/core/testing';

import { PaintingserviceService } from './paintingservice.service';

describe('PaintingserviceService', () => {
  let service: PaintingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaintingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
