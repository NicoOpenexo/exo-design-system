import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';
import { ExoToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  declarations: [
    ExoToolbarComponent,
  ],
  exports: [
    ExoToolbarComponent,
    MatToolbarModule,
  ],
})
export class ExoToolbarModule {}