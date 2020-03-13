import { TestBed } from '@angular/core/testing';

import { NombreDeButtonService } from './nombre-de-button.service';

describe('NombreDeButtonService', () => {
  let service: NombreDeButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NombreDeButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
