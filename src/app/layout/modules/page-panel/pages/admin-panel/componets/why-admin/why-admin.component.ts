import { Component, OnInit } from '@angular/core';
import { LandingWhy } from 'src/app/layout/modules/page-home/models/landing-why.model';
import { LandingWhyService } from 'src/app/layout/modules/page-home/services/landing-why.service';

@Component({
  selector: 'app-why-admin',
  templateUrl: './why-admin.component.html',
  styleUrls: ['./why-admin.component.css']
})
export class WhyAdminComponent implements OnInit {

  why: LandingWhy[] = [];

  constructor(private whyService: LandingWhyService) { }

  ngOnInit(): void {
    this.getWhys();
  }

  getWhys() {
    this.whyService.getWhy()
    .subscribe(
      res => {
        this.why = res;
      },
      err => console.log(err)
    )
  }

  deleteWhys(id: number) {
    this.whyService.deleteWhy(id)
    .subscribe(
      res => {
        this.getWhys();
      },
      err => console.log(err)
    )
  }

}
