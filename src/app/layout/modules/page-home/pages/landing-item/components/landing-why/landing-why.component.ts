import { Component, OnInit } from '@angular/core';
import { LandingWhy } from '../../../../models/landing-why.model';
import { LandingWhyService } from '../../../../services/landing-why.service';

@Component({
  selector: 'app-landing-why',
  templateUrl: './landing-why.component.html',
  styleUrls: ['./landing-why.component.css']
})
export class LandingWhyComponent implements OnInit {

  landingWhy: LandingWhy[] = [];

  constructor(private landingWhyService: LandingWhyService) { }

  ngOnInit(): void {
    this.getWhys();
  }

  getWhys() {
    this.landingWhyService.getWhy()
    .subscribe(
      res => { 
        this.landingWhy = res;
      },
      err => console.log(err)
    )
  }
}
