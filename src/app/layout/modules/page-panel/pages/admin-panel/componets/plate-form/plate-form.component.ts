import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LandingPlate } from 'src/app/layout/modules/page-home/models/landing-plate.model';
import { LandingPlateService } from 'src/app/layout/modules/page-home/services/landing-plate.service';

@Component({
  selector: 'app-plate-form',
  templateUrl: './plate-form.component.html',
  styleUrls: ['./plate-form.component.css']
})
export class PlateFormComponent implements OnInit {

  menu: LandingPlate= {    
    menu_plato: '',
    menu_contenido: '',
    menu_category: '',
    menu_precio: 0
  };

  edit: boolean = false;
 
  constructor(
    private menuService: LandingPlateService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params){
      this.menuService.getMenuOne(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.menu = res;
          this.edit = true;
        }
      )
    }
  }

  submitMenu(){
    this.menuService.createMenu(this.menu)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin-plete']);
      },

      err => console.log(err)
    )
  }

  updateMenu(){    

   delete this.menu.created_at;
   this.menuService.editMenu(this.menu, this.menu.menu_id!)   
   .subscribe(
     res => {
      console.log(res)
      this.router.navigate(['/admin-plate'])
     },
     err => console.log(err)
   );
  }

}
