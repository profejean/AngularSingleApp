import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LandingSlider } from 'src/app/layout/modules/page-home/models/landing-slider.model';
import { LandingSliderService } from 'src/app/layout/modules/page-home/services/landing-slider.service';

@Component({
  selector: 'app-slider-form',
  templateUrl: './slider-form.component.html',
  styleUrls: ['./slider-form.component.css']
})
export class SliderFormComponent implements OnInit {

  slider: LandingSlider = new LandingSlider()

  edit: boolean = false;
  
 


  constructor(
    private sliderService: LandingSliderService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
   
    if(params){  
      this.sliderService.getLandingSliderOne(params.id)
      .subscribe(
        res => {        
          this.slider = res;
          this.edit = true;
        }
      )
    }
  }

  onChange(event:any): void {
    try {
    const files = event.target.files;
    this.slider.home_img = files[0] 
    } catch {}
 }

  submitSlider(){
    this.sliderService.createLandingSlider(this.slider)
    .subscribe(
      res => {        
        this.router.navigate(['admin-slider']);
      },
      err => console.log(err)
    )
  }

  updateSlider(){    
    
   delete this.slider.created_at;
   this.sliderService.editLandingSlider(this.slider, this.slider.home_id!)   
   .subscribe(
     res => {      
      this.router.navigate(['admin-slider'])
     },
     err => console.log(err)
   );
  }
}
