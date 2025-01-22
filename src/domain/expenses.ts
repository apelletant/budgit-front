import type { Frequency } from './interval'

export interface Expense {
  creationDate: number
  interval: Frequency
  value: number
  label: string
}
