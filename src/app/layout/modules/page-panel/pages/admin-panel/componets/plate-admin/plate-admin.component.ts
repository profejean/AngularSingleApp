import { Component, OnInit } from '@angular/core';
import { LandingPlate } from 'src/app/layout/modules/page-home/models/landing-plate.model';
import { LandingPlateService } from 'src/app/layout/modules/page-home/services/landing-plate.service';

@Component({
  selector: 'app-plate-admin',
  templateUrl: './plate-admin.component.html',
  styleUrls: ['./plate-admin.component.css']
})
export class PlateAdminComponent implements OnInit {

  menu: LandingPlate[] = [];

  constructor(private menuService: LandingPlateService) { }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus() {
    this.menuService.getMenu()
    .subscribe(
      res => {
        this.menu = res;
      },
      err => console.log(err)
    )
  }

  deleteMenus(id: number) {
    this.menuService.deleteMenu(id)
    .subscribe(
      res => {
        this.getMenus();
      },
      err => console.log(err)
    )
  }

}
