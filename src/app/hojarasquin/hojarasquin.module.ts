import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HojarasquinPage } from './hojarasquin.page';

const routes: Routes = [
  {
    path: '',
    component: HojarasquinPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HojarasquinPage]
})
export class HojarasquinPageModule {}
