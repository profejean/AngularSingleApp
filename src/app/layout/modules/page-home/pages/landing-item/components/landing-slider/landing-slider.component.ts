import { Component, OnInit } from '@angular/core';
import { LandingSlider } from '../../../../models/landing-slider.model';
import { LandingSliderService } from '../../../../services/landing-slider.service';

@Component({
  selector: 'app-landing-slider',
  templateUrl: './landing-slider.component.html',
  styleUrls: ['./landing-slider.component.css']
})
export class LandingSliderComponent implements OnInit {

  landingSlider: LandingSlider[] = [new LandingSlider()];


  constructor(private landingSliderService: LandingSliderService) { }

  ngOnInit(): void {
    this.getLandingSliders();
  }

  getLandingSliders() {
    this.landingSliderService.getLandingSlider()
    .subscribe(
      res => {
        this.landingSlider = res.map(x=>{
          return {
            home_title:x.home_title,
            home_description:x.home_description,
            home_img:'http://localhost:3000/' + x.home_img
          }
        });      
      },
      err => console.log(err)
    )
  }

}
