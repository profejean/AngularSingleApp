import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { PlateAdminComponent } from './pages/admin-panel/componets/plate-admin/plate-admin.component';
import { PlateFormComponent } from './pages/admin-panel/componets/plate-form/plate-form.component';
import { SliderAdminComponent } from './pages/admin-panel/componets/slider-admin/slider-admin.component';
import { SliderFormComponent } from './pages/admin-panel/componets/slider-form/slider-form.component';
import { UsFormComponent } from './pages/admin-panel/componets/us-form/us-form.component';
import { WhyAdminComponent } from './pages/admin-panel/componets/why-admin/why-admin.component';
import { WhyFormComponent } from './pages/admin-panel/componets/why-form/why-form.component';
const routes: Routes = [  
  
  { 
    path: "", 
    component: AdminPanelComponent
  },
  {
    path: "admin-slider",
    component: SliderAdminComponent
  },
  {
    path: "slider-form",
    component: SliderFormComponent
  },
  {
    path: "slider-form/:id",
    component: SliderFormComponent
  },
  {
    path: "us-form/:id",
    component: UsFormComponent
  },
  {
    path: "admin-why",
    component: WhyAdminComponent
  },
  {
    path: "why-form",
    component: WhyFormComponent
  },
  {
    path: "why-form/:id",
    component: WhyFormComponent
  },
  {
    path: "admin-plate",
    component: PlateAdminComponent
  },
  {
    path: "plate-form",
    component: PlateFormComponent
  },
  {
    path: "plate-form/:id",
    component: PlateFormComponent
  }
  
    
  ];



  @NgModule( {
    imports: [RouterModule.forChild( routes )],
    exports: [RouterModule]
  } )
export class PagePanelRouting { }
