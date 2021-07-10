import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoot } from './app.root';
import { AppRouting } from './app.routing';
import { PagePanelRouting } from './layout/modules/page-panel/page-panel.routing';



@NgModule({
  declarations: [
    AppRoot
  
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    FormsModule,
    PagePanelRouting
  ],
  providers: [],
  bootstrap: [AppRoot]
})
export class AppModule { }
