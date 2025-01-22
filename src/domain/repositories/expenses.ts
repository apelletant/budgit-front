import type { Expense } from '../expenses'

export interface ExpenseRepository {
  getExpenses: () => Promise<Expense[]>
  addExpense: (exp: Expense) => Promise<void>
}
