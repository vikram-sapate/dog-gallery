import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DogService } from 'src/app/services/dog.service';

import { Breed } from 'src/app/interfaces/breed';
import { SubBreed } from 'src/app/interfaces/sub-breed';

@Component({
  selector: 'app-dog-breed',
  templateUrl: './dog-breed.component.html',
  styleUrls: ['./dog-breed.component.css'],
})
export class DogBreedComponent implements OnInit {
  breed: Breed = {};
  subBreedsInfo: SubBreed[] = [];
  breedImages: string[] = [];
  
  constructor(
    private dogService: DogService,
    @Inject(MAT_DIALOG_DATA) public data: { breed: Breed }
  ) {
    this.breed = this.data.breed;
  }

  ngOnInit(): void {
    this.dogService
      .getBreedImage(this.breed.breedName!, 4)
      .subscribe((imgData) => {
        this.breedImages = imgData.message;
      });

    for (const breedName of this.breed.subBreeds!) {
      this.dogService
        .getBreedImage(`${this.breed.breedName}/${breedName}`)
        .subscribe((imgData) => {
          this.subBreedsInfo.push({
            breedName,
            image: imgData.message,
          });
        });
    }
  }
}
