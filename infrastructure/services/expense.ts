import { AddExpenseReq, AddExpenseRes, Expense } from "@/types/expense"
import { ExpenseRepository } from "@/infrastructure/repository/expense"

export class ExpenseService {
  constructor(private expenseRepository: ExpenseRepository) { }

  async getExpenses(): Promise<Expense[]> {
    try {
      return await this.expenseRepository.fetchExpenses()
    } catch (error) {
      // TODO Logging
      throw error
    }
  }

  async addExpense(req: AddExpenseReq): Promise<AddExpenseRes> {
    try {
      return await this.expenseRepository.addExpense(req)
    } catch (error) {
      // TODO Logging
      throw error
    }
  }
}
