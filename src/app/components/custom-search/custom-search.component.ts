import { Component, OnInit } from '@angular/core';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.css'],
})
export class CustomSearchComponent implements OnInit {
  breedImages: string[] = [];
  breedNames = this.dogService.breedNames;
  selectedBreedName: string = '';
  imageCnt: number = 4;
  constructor(private dogService: DogService) {}

  ngOnInit(): void {}

  onGetImages() {
    this.dogService
      .getBreedImage(this.selectedBreedName, this.imageCnt)
      .subscribe((imgData) => {
        this.breedImages = imgData.message;
      });
  }
}
