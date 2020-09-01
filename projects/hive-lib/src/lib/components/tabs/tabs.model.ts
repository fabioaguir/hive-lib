import { TabComponent } from './tab/tab.component';

export class Tabs {
  tabs: TabComponent[] = [];

  addTab(tab: TabComponent) {
    this.tabs.push(tab);
  }
}
