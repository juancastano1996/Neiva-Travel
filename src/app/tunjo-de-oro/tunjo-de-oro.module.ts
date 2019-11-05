import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TunjoDeOroPage } from './tunjo-de-oro.page';

const routes: Routes = [
  {
    path: '',
    component: TunjoDeOroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TunjoDeOroPage]
})
export class TunjoDeOroPageModule {}
