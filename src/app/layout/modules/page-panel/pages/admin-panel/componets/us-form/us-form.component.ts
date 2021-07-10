import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LandingUs } from 'src/app/layout/modules/page-home/models/landing-us.model';
import { LandingUsService } from 'src/app/layout/modules/page-home/services/landing-us.service';

@Component({
  selector: 'app-us-form',
  templateUrl: './us-form.component.html',
  styleUrls: ['./us-form.component.css']
})
export class UsFormComponent implements OnInit {

  us: LandingUs = new LandingUs()
   
  constructor(
    private usService: LandingUsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

    

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params){
      this.usService.getUsOne(params.id)
      .subscribe(
        res => {    
          this.us = res;   
        }
      )
    }
  }

  onChange(event:any): void {
    try {
    const files = event.target.files;
    this.us.us_img = files[0] 
    } catch {}
 }

  updateUs(){    

   delete this.us.created_at;
   this.usService.editUs(this.us, this.us.us_id!)   
   .subscribe(
     res => {      
      this.router.navigate(['/page-panel'])
     },
     err => console.log(err)
   );
  }

}
