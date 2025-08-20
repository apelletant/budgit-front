import { AddExpenseReq, AddExpenseRes, Expense } from "@/types/expense"

const REPOSITORY_URL = "http://localhost:8080"

export interface IExpenseRepository {
  fetchExpenses(): Promise<Expense[]>
  addExpense(req: AddExpenseReq): Promise<AddExpenseRes>
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

  async addExpense(req: AddExpenseReq): Promise<AddExpenseRes> {
    const response = await fetch(
      `${this.baseUrl}/expense`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req),
    }
    )

    if (!response.ok) {
      console.log(`Failed to fetch posts: ${response.status} ${response.statusText}`)
      throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`)
    }

    const data: Expense[] = await response.json()
    console.log("response", response)
    return data
  }
}
