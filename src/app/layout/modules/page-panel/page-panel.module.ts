import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { PagePanelRoot } from './page-panel.root';
import { PagePanelRouting} from './page-panel.routing';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { NavbarAdminComponent } from './pages/admin-panel/componets/navbar-admin/navbar-admin.component';
import { SliderAdminComponent } from './pages/admin-panel/componets/slider-admin/slider-admin.component';
import { SliderFormComponent } from './pages/admin-panel/componets/slider-form/slider-form.component';
import { UsFormComponent } from './pages/admin-panel/componets/us-form/us-form.component';
import { WhyAdminComponent } from './pages/admin-panel/componets/why-admin/why-admin.component';
import { WhyFormComponent } from './pages/admin-panel/componets/why-form/why-form.component';
import { PlateFormComponent } from './pages/admin-panel/componets/plate-form/plate-form.component';
import { PlateAdminComponent } from './pages/admin-panel/componets/plate-admin/plate-admin.component';









@NgModule({
  declarations: [ 
    PagePanelRoot, AdminPanelComponent, NavbarAdminComponent, SliderAdminComponent, SliderFormComponent, UsFormComponent, WhyAdminComponent, WhyFormComponent, PlateFormComponent, PlateAdminComponent
  ],
  imports: [
    CommonModule,
    PagePanelRouting,
    FormsModule,

  ]
})
export class PagePanelModule { }
