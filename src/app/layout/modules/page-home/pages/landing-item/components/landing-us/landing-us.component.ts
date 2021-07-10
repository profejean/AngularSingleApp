import { Component, OnInit } from '@angular/core';
import { LandingUs } from '../../../../models/landing-us.model';
import { LandingUsService } from '../../../../services/landing-us.service';

@Component({
  selector: 'app-landing-us',
  templateUrl: './landing-us.component.html',
  styleUrls: ['./landing-us.component.css']
})
export class LandingUsComponent implements OnInit {

  landingUs: LandingUs= new LandingUs()

  constructor(private landingUsService: LandingUsService) { }

  ngOnInit(): void {
    this.getUs();
  }

  getUs() {
    this.landingUsService.getUsOne(1)
    .subscribe(
      res => {         
        const img = 'http://localhost:3000/' + res.us_img;
        res.us_img = img;      
        this.landingUs = res; 
      },
      err => console.log(err)
    )
  }

}
