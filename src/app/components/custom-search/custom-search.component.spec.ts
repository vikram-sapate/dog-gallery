import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { DogService } from 'src/app/services/dog.service';
import { DogServiceStub } from 'src/app/unit-testing/dog-service.stub';

import { CustomSearchComponent } from './custom-search.component';

describe('CustomSearchComponent', () => {
  let component: CustomSearchComponent;
  let fixture: ComponentFixture<CustomSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,MaterialModule,BrowserAnimationsModule ],
      declarations: [ CustomSearchComponent ],
      providers: [
        { provide: DogService, useClass: DogServiceStub}
    ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSearchComponent);
    component = fixture.componentInstance;
    component.onGetImages();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
