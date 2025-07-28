export interface Expense {
  creationDate: number
  interval: number
  value: number
  label: string
  id: number
}

export interface PostsResult {
  expenses: Expense[]
  error: string | null
}
