import { of } from 'rxjs';
import { Breed } from '../interfaces/breed';

export class DogServiceStub {
  breedInfo: Breed[] = [];
  gotAllBreedsflag = false;
  breedNames: string[] = [];
  getAllBreeds() {
    return of({
      message: {
        a: [],
        b: ['a'],
      },
    });
  }

  getBreedImage(breed: string, count = 1) {
    return of({
        message: ''
    });
  }
}
