import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzInputModule,
    NzAlertModule,
    NzNotificationModule,
    NzDrawerModule,
    NzTypographyModule,
    NzButtonModule,
    NzGridModule,
    NzFormModule
  ],
  exports:[
    NzInputModule,
    NzAlertModule,
    NzNotificationModule,
    NzDrawerModule,
    NzTypographyModule,
    NzButtonModule,
    NzGridModule,
    NzFormModule
  ]
})
export class SharedModule { }
