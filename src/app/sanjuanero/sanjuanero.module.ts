import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { SanjuaneroPage } from './sanjuanero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SanjuaneroPage
      }
    ])
  ],
  declarations: [SanjuaneroPage]
})
export class SanjuaneroPageModule {}
