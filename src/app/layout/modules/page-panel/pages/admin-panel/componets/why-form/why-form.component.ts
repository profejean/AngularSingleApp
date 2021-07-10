import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LandingWhy } from 'src/app/layout/modules/page-home/models/landing-why.model';
import { LandingWhyService } from 'src/app/layout/modules/page-home/services/landing-why.service';

@Component({
  selector: 'app-why-form',
  templateUrl: './why-form.component.html',
  styleUrls: ['./why-form.component.css']
})
export class WhyFormComponent implements OnInit {

  why: LandingWhy= new LandingWhy()

  edit: boolean = false;
 
  constructor(
    private whyService: LandingWhyService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params){
      this.whyService.getWhyOne(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.why = res;
          this.edit = true;
        }
      )
    }
  }

  submitWhy(){
    this.whyService.createWhy(this.why)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin-why']);
      },

      err => console.log(err)
    )
  }

  updateWhy(){    

   delete this.why.created_at;
   this.whyService.editWhy(this.why, this.why.why_id!)   
   .subscribe(
     res => {
      console.log(res)
      this.router.navigate(['/admin-why'])
     },
     err => console.log(err)
   );
  }

}
