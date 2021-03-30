import { Component, OnInit } from '@angular/core';
import { DogService } from './services/dog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'dog-gallery';

  constructor(private dogService: DogService) {}

  ngOnInit() {
    this.dogService.getAllBreeds().subscribe((data) => {
      this.dogService.breedNames = Object.keys(data.message);
      for (const breedName of this.dogService.breedNames) {
        this.dogService.getBreedImage(breedName).subscribe((imgData) => {
          this.dogService.gotAllBreedsflag = true;
          this.dogService.breedInfo.push({
            breedName,
            image: imgData.message,
            subBreeds: data.message[breedName],
          });
        });
      }
    });
  }
}
