import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ExpenseFormComponent, ExpenseJourneyWrapperComponent, ExpenseListComponent } from '@ja/expense-journey/feature';

export const expenseJourneyRoutes: Route[] = [
{
  path: '',
  component: ExpenseJourneyWrapperComponent,
  children: [
    {
      path: 'list',
      component: ExpenseListComponent
    },
    {
      path: 'create',
      component: ExpenseFormComponent
    },
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    }
  ]
}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(expenseJourneyRoutes)
  ],

})
export class ExpenseJourneyShellModule {}
