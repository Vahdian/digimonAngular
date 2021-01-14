import { AddDigimonPageComponent } from './add-digimon-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDigimonPageRoutingModule } from './add-digimon-page-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddDigimonPageComponent],
  imports: [
    CommonModule,
    AddDigimonPageRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddDigimonPageModule { }
