import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppButtonComponent } from './components/app-button/app-button.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppButtonComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
  ],
  exports: [
    AppButtonComponent,
    DataTableComponent,
  ],
})
export class LubaLibModule { }
