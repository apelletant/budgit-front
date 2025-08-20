export interface Expense {
  subscriptionDate: number
  interval: number
  value: number
  label: string
  id: number
}

export interface PostsResult {
  expenses: Expense[]
  error: string | null
}

export interface AddExpenseReq {
  value: number
  interval: number
  label: string
  subscriptionDate: number
}


export interface AddExpenseRes { }
