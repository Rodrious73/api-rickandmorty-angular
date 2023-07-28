import { TestBed } from '@angular/core/testing';

import { ServicesApiMortyService } from './services-api-morty.service';

describe('ServicesApiMortyService', () => {
  let service: ServicesApiMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesApiMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
