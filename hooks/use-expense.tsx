import { useState, useEffect, useCallback } from "react"
import { AddExpenseReq, Expense } from "@/types/expense"
import { ExpenseService } from "@/infrastructure/services/expense"

export function useExpenses(expenseService: ExpenseService) {
  const [expenses, setexpenses] = useState<Expense[]>([])
  const [loading, setLoading] = useState(true)
  const [isAdding, setIsAdding] = useState(false)
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


  const addExpense = useCallback(async (expenseData: AddExpenseReq) => {
    try {
      setIsAdding(true)
      setError(null)

      await expenseService.addExpense(expenseData)
      await fetchExpenses()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add expense")
      throw err
    } finally {
      setIsAdding(false)
    }
  }, [expenseService])

  const refresh = useCallback(() => {
    fetchExpenses()
  }, [fetchExpenses])

  return {
    expenses,
    loading,
    error,
    refresh,
    addExpense,
    isAdding
  }
}
