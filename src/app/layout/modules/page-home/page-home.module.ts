import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeRouting } from './page-home.routing';
import { PageHomeRoot } from './page-home.root';
import { LandingItemPage } from './pages/landing-item/landing-item.component';
import { LandingMenuComponent } from './pages/landing-item/components/landing-menu/landing-menu.component';
import { LandingSliderComponent } from './pages/landing-item/components/landing-slider/landing-slider.component';
import { LandingUsComponent } from './pages/landing-item/components/landing-us/landing-us.component';
import { LandingWhyComponent } from './pages/landing-item/components/landing-why/landing-why.component';
import { LandingPlateComponent } from './pages/landing-item/components/landing-plate/landing-plate.component';
import { LandingFooterComponent } from './pages/landing-item/components/landing-footer/landing-footer.component';



@NgModule({
  declarations: [
    PageHomeRoot,
    LandingItemPage,
    LandingMenuComponent,
    LandingSliderComponent,
    LandingUsComponent,
    LandingWhyComponent,
    LandingPlateComponent,
    LandingFooterComponent
  ],
  imports: [
    CommonModule,
    PageHomeRouting
  ]
})
export class PageHomeModule { }
