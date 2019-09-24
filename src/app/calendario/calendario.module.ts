  import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
 
import { CalendarioPage } from './calendario.page';
import { NgCalendarModule  } from 'ionic2-calendar';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CalendarioPage
      }
    ]),
    NgCalendarModule
  ],
  declarations: [CalendarioPage]
})
export class CalendarioPageModule {}
