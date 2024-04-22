import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JaCardComponent } from './ja-card.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [JaCardComponent],
  imports: [CommonModule,
    CardModule,
    ButtonModule,
  ],
  exports: [JaCardComponent]
})
export class JaCardModule {}
