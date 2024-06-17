export interface Expense {
    from: string;
    to: string;
    name: string;
    description: string;
    date: string;
    amount: number;
    isMonthly: boolean;
    isConsumer: boolean;
  }