import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashoboardRoutingModule } from './dashoboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LubaLibModule } from '@/luba-lib/luba-lib.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashoboardRoutingModule,
    LubaLibModule,
  ]
})
export class DashoboardModule { }
