import type { Expense } from '~/domain/expenses'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ExpenseRepositoryImpl } from '~/data/repositories/ExpenseRepositoryImpl'
import { GetExpensesUseCase } from '~/domain/usecases/getExpenses'

export const useExpensesStore = defineStore('expenses', () => {
  const expenses = ref<Expense[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Initialize repository and use case
  const expRepository = new ExpenseRepositoryImpl()
  const getExpensesUseCase = new GetExpensesUseCase(expRepository)

  // Actions
  async function fetchExpenses() {
    loading.value = true
    error.value = null

    try {
      expenses.value = await getExpensesUseCase.execute()
    }
    catch (e) {
      error.value = e instanceof Error ? e.message : 'An error occurred'
    }
    finally {
      loading.value = false
    }
  }

  return {
    expenses,
    loading,
    error,
    fetchExpenses,
  }
})
