import { ExpenseRepository } from "@/infrastructure/repository/expense"
import { ExpenseService } from "@/infrastructure/services/expense"

class DependencyContainer {
  private _expenseRepository: ExpenseRepository | null = null
  private _expenseService: ExpenseService | null = null

  get expenseRepository() {
    if (!this._expenseRepository) {
      this._expenseRepository = new ExpenseRepository()
    }
    return this._expenseRepository
  }

  get expenseService() {
    if (!this._expenseService) {
      this._expenseService = new ExpenseService(this.expenseRepository)
    }
    return this._expenseService
  }
}

export const container = new DependencyContainer()
