import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren: ()=>
  import('./pages/home-page/home-page.module').then(m => m.HomePageModule)},
  {path:'digimons', loadChildren: ()=>
  import('./pages/digimons-page/digimons-page.module').then(m => m.DigimonsPageModule)},
  {path:'add-digimons', loadChildren: ()=>
  import('./pages/add-digimon-page/add-digimon-page.module').then(m => m.AddDigimonPageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
