import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DogService } from './dog.service';

describe('DogService', () => {
  let service: DogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(DogService);
  });

  it('should be created', () => {
    service.getAllBreeds();
    service.getBreedImage('');
    expect(service).toBeTruthy();
  });
});
