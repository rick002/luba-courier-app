import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  { 
    path: '', component: MainComponent,
    children: [
      {
          path: '',
          loadChildren: () => import('.././dashoboard/dashoboard.module').then(m => m.DashoboardModule),
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
