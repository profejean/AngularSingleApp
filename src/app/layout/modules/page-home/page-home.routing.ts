import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingItemPage } from './pages/landing-item/landing-item.component';


const routes: Routes = [
  
  { 
    path: "", 
    component: LandingItemPage
  }
  
    
  ];


  @NgModule( {
    imports: [RouterModule.forChild( routes )],
    exports: [RouterModule]
  } )
export class PageHomeRouting { }
