import { Component, OnInit, Input, TemplateRef, ViewChild, ContentChild } from '@angular/core';
import { TabsComponent } from '../tabs.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input()
  title: string;

  ctx = {
    teste : 'start'
  };

  @ContentChild('content', {static: true})
  content: TemplateRef<any>;

  active: boolean;

  constructor(private tabs: TabsComponent) {
  }

  ngOnInit() {
    this.tabs.addTab(this);
  }

}
