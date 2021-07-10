import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-panel',
  template: '<router-outlet></router-outlet>',
  styles: ['']
})
export class PagePanelRoot implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
