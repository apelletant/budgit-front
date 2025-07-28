import { Expense } from "@/types/expense"

const REPOSITORY_URL = "http://localhost:8080"

export interface IExpenseRepository {
  fetchExpenses(): Promise<Expense[]>
}

export class ExpenseRepository implements IExpenseRepository {
  private readonly baseUrl = REPOSITORY_URL

  async fetchExpenses(): Promise<Expense[]> {
    const response = await fetch(`${this.baseUrl}/expenses`)

    if (!response.ok) {
      console.log(`Failed to fetch posts: ${response.status} ${response.statusText}`)
      throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`)
    }

    const data: Expense[] = await response.json()
    console.log("response", response)
    return data
  }
}
