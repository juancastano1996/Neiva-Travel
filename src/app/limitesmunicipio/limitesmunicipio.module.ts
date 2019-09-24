import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LimitesmunicipioPage } from './limitesmunicipio.page';

const routes: Routes = [
  {
    path: '',
    component: LimitesmunicipioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LimitesmunicipioPage]
})
export class LimitesmunicipioPageModule {}
