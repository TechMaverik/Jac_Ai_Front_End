import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from '../utils/expense.interface';

@Component({
  selector: 'ja-expense-form',
  templateUrl: './expense-form.component.html',
})
export class ExpenseFormComponent {
  expense: Expense = {
    from: '',
    to: '',
    name: '',
    description: '',
    date: '',
    amount: 0,
    isMonthly: false,
    isConsumer: false
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Form submitted', this.expense);
    // Mock API call
    setTimeout(() => {
      this.router.navigate(['/web-app/expenses']);
    }, 2000);
  }
}
