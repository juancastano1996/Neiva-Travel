import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RutabiodiversidadPage } from './rutabiodiversidad.page';

const routes: Routes = [
  {
    path: '',
    component: RutabiodiversidadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RutabiodiversidadPage]
})
export class RutabiodiversidadPageModule {}
