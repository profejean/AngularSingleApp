import { Component, OnInit } from '@angular/core';
import { LandingPlate } from '../../../../models/landing-plate.model';
import { LandingPlateService } from '../../../../services/landing-plate.service';

@Component({
  selector: 'app-landing-plate',
  templateUrl: './landing-plate.component.html',
  styleUrls: ['./landing-plate.component.css']
})
export class LandingPlateComponent implements OnInit {

  landingPlate: LandingPlate[] = [];

  constructor(private landingPlateService: LandingPlateService) { }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus() {
    this.landingPlateService.getMenu()
    .subscribe(
      res => {
        console.log(res)
        this.landingPlate = res;
      },
      err => console.log(err)
    )
  }

}
