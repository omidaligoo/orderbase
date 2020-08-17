import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VitrinIndexComponent } from './_index/vitrin-index.component';

const routes: Routes = [
  {
    path: '',
    component: VitrinIndexComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VitrinRoutingModule { }
