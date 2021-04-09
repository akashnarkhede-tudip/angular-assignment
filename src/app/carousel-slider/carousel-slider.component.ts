import { Component, OnInit } from '@angular/core';
import { ISlider } from './slider.interface';
import { SliderService } from './slider.service';

@Component({
  selector: 'app-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.scss']
})
export class CarouselSliderComponent implements OnInit {
  slides: ISlider[] = [];
  currentSlide: number = 0;

  slideConfig: any;

  constructor(private sliderService: SliderService) { }

  ngOnInit(): void {
    this.slides = this.sliderService.getAllSliders();

    this.slideConfig = {
      "centerMode": true,
      "slidesToShow": 4.4,
      "speed": 500,
      "arrows": false,
      "draggable": true,
      "dots": false,
      "swipeToSlide": true,
      "accessibility": false,
      "responsive": [
       {
         "breakpoint": 450,
         "settings": {
           "arrows": false,
           "centerMode": false,
           "slidesToShow": 1,
           "speed": 500,
           "accessibility": false,
         }
       }
     ]
    };
  }

  beforeChangeEvent(event: any) {
    this.currentSlide = event.nextSlide;
  }
}
