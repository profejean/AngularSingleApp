import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppRoot } from './app.root';

const routes: Routes = [
  { path: "", redirectTo: "page-home", pathMatch: "full" 

  },
 
  {
    path: 'page-home',
    loadChildren: () =>
      import( './layout/modules/page-home/page-home.module' ).then( ( m ) => m.PageHomeModule ),
  }
,
  {
    path: "page-panel", redirectTo: "page-panel", pathMatch: "full" 
  },

  {
    path: 'page-panel',
    loadChildren: () =>
      import( './layout/modules/page-panel/page-panel.module' ).then( ( m ) => m.PagePanelModule ),
  },
/*
  {
    path: 'recorded-classes',
    loadChildren: () =>
      import( './layout/modules/recorded-classes/recorded-classes.module' ).then( ( m ) => m.RecordedClassesModule ),
  },

  { path: "access-denied", component: AccessDeniedPage },
  { path: "error", component: ErrorPage },
  { path: '**', redirectTo: 'notfound' },
  { path: "notfound", component: NotFoundPage }

  */

];



@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )
export class AppRouting { }
