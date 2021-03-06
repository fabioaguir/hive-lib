import { TabComponent } from './tab/tab.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';



@NgModule({
  declarations: [
    TabsComponent,
    TabComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabsComponent,
    TabComponent
  ]
})
export class TabsModule { }
