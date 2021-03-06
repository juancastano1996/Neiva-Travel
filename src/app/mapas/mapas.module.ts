import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { Routes} from '@angular/router';

import { MapasPage } from './mapas.page';

const routes: Routes = [
  {
    path: '',
    component: MapasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path:'',
        component: MapasPage
      }
    ])
  ],
  declarations: [MapasPage]
})
export class MapasPageModule {}
