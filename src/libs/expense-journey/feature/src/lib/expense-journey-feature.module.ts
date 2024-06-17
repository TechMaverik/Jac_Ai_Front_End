import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseJourneyWrapperComponent } from './expense-journey-wrapper/expense-journey-wrapper.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JaCardModule } from '@ja/ja-ui';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';

const components = [ExpenseFormComponent, ExpenseListComponent, ExpenseJourneyWrapperComponent];
@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, JaCardModule, ButtonModule, RadioButtonModule],
  declarations: [...components],
  exports: [...components],
})
export class ExpenseJourneyFeatureModule {}
