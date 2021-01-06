import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PokomonsService } from './pokomons.service';

describe('PokomonsService', () => {
  let service: PokomonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PokomonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
