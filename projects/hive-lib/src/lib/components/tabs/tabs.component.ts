import { Component, OnInit } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  tabs: TabComponent[] = [];

  constructor() { }

  ngOnInit() {
  }

  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    tab.ctx.teste = tab.title;
    this.tabs.push(tab);
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
    tab.ctx.teste = tab.title;
  }
}
