import { MenuComponent } from './pages/menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MenuComponent]
})
export class CoreModule { }
