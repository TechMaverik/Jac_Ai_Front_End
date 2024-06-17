import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ExpenseJourneyShellModule } from "@ja/expense-journey/shell";

@NgModule({
    imports: [
      RouterModule,
      CommonModule,
      ExpenseJourneyShellModule
    ],
  })
  export class ExpensesJourneyLoaderModule { }
  