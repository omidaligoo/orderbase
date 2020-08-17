import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './_index/store.component';


const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
    children:[
      {
        path: '',
        loadChildren: () => import('../vitrin/vitrin.module').then(mod => mod.VitrinModule)
      },
      {
        path: 'a',
        loadChildren: () => import('../company/company.module').then(mod => mod.CompanyModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
