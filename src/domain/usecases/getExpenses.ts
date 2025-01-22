import type { Expense } from '../expenses'
import type { ExpenseRepository } from '../repositories/expenses'

export class GetExpensesUseCase {
  constructor(private userRepository: ExpenseRepository) {}

  execute(): Promise<Expense[]> {
    return this.userRepository.getExpenses()
  }
}
