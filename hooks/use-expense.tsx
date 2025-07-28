import { useState, useEffect, useCallback } from "react"
import { Expense } from "@/types/expense"
import { ExpenseService } from "@/infrastructure/services/expense"

export function useExpenses(expenseService: ExpenseService) {
  const [expenses, setexpenses] = useState<Expense[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchExpenses = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const fetchedExpenses = await expenseService.getExpenses()
      setexpenses(fetchedExpenses)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error")
    } finally {
      setLoading(false)
    }
  }, [expenseService])

  useEffect(() => {
    fetchExpenses()
  }, [fetchExpenses])

  const refresh = useCallback(() => {
    fetchExpenses()
  }, [fetchExpenses])

  return {
    expenses,
    loading,
    error,
    refresh
  }
}
