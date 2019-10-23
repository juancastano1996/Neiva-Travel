import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActualizarUsuarioPage } from './actualizar-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarUsuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActualizarUsuarioPage]
})
export class ActualizarUsuarioPageModule {}
