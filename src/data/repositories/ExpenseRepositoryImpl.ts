import type { Expense } from '~/domain/expenses'
import type { ExpenseRepository } from '~/domain/repositories/expenses'
import axios from 'axios'
import { Frequency } from '~/domain/interval'

export class ExpenseRepositoryImpl implements ExpenseRepository {
  private readonly apiUrl = 'api/users'

  async getExpenses(): Promise<Expense[]> {
    // const response = await axios.get(this.apiUrl)
    // return response.data

    const exps: Expense[] = [
      {
        creationDate: Date.now(),
        interval: Frequency.daily,
        value: 10,
        label: 'Netflix',
      },
      {
        creationDate: Date.now() - 24 * 60 * 60 * 1000,
        interval: Frequency.weekly,
        value: 15,
        label: 'Amazon',
      },
      {
        creationDate: Date.now() - 2 * (24 * 60 * 60 * 1000),
        interval: Frequency.monthly,
        value: 5,
        label: 'UberOne',
      },
      {
        creationDate: Date.now(),
        interval: Frequency.annual,
        value: 20,
        label: 'Car insurance',
      },
    ]

    return new Promise<Expense[]>((resolve) => {
      resolve(exps)
    })
  }

  async addExpense(exp: Expense): Promise<void> {
    const response = await axios.post(`${this.apiUrl}/`, exp)
    return response.data
  }
}
