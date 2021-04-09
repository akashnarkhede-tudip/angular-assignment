import { Injectable } from "@angular/core";
import { ISlider } from "./slider.interface";

@Injectable({providedIn: 'root'})
export class SliderService {

    constructor() {}

    getAllSliders() {
        const sliderData = JSON.stringify([
            {
                name: 'Mobile internet',
                imagePath: '../../assets/img/cross-image.png'
            },
            {
                name: 'Home internet',
                imagePath: '../../assets/img/cross-image.png'
            },
            {
                name: 'Get a device',
                imagePath: '../../assets/img/cross-image.png'
            },
            {
                name: 'Add a phone-line',
                imagePath: '../../assets/img/cross-image.png'
            },
            {
                name: 'Upgrade',
                imagePath: '../../assets/img/cross-image.png'
            }
        ]);

        return <ISlider[]>JSON.parse(sliderData);
    }
}