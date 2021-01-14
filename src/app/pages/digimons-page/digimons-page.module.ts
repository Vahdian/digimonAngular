import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigimonsPageRoutingModule } from './digimons-page-routing.module';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DigimonsPageComponent } from './digimons-page.component';


@NgModule({
  declarations: [GalleryComponent, DigimonsPageComponent],
  imports: [
    CommonModule,
    DigimonsPageRoutingModule,
    SharedModule
   ]
})
export class DigimonsPageModule { }
