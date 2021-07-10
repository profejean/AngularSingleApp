import { Component, OnInit } from '@angular/core';
import { LandingSlider } from 'src/app/layout/modules/page-home/models/landing-slider.model';
import { LandingSliderService } from 'src/app/layout/modules/page-home/services/landing-slider.service';


@Component({
  selector: 'app-slider-admin',
  templateUrl: './slider-admin.component.html',
  styleUrls: ['./slider-admin.component.css']
})
export class SliderAdminComponent implements OnInit {

  slider: LandingSlider[] = [];

  constructor(private sliderService: LandingSliderService) { }

  ngOnInit(): void {
    this.getSlider();
  }

  getSlider() {
    this.sliderService.getLandingSlider()
    .subscribe(
      res => {
        this.slider = res;
      },
      err => console.log(err)
    )
  }

  deleteSlider(id: number) {
    this.sliderService.deleteLandingSlider(id)
    .subscribe(
      res => {
        this.getSlider();
      },
      err => console.log(err)
    )
  }

}
