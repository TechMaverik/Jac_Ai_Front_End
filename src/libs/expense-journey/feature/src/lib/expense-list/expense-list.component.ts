import { Component } from '@angular/core';
import { Expense } from '../utils/expense.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'ja-expense-list',
  templateUrl: './expense-list.component.html',
})
export class ExpenseListComponent {

  public expenses: Expense[] = [
    { from: 'John', to: 'Electric Company', name: 'Electric Bill', description: 'Monthly electric bill', date: '2024-06-01', amount: 100.00, isMonthly: true, isConsumer: true },
    // Add more expenses here
  ];

  constructor(private router: Router) {}

  addExpenses() {
    this.router.navigateByUrl('/web-app/expenses/create')
  }
}
