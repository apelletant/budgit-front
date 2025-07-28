"use client"

import { container } from "@/container/dependencies"
import { useExpenses } from "@/hooks/use-expense"
import { useI18n } from "./i18n-provider"
import { RefreshCw } from "lucide-react"

export function DataFetcher() {
  const { t } = useI18n()
  const { expenses, loading, error, refresh } = useExpenses(container.expenseService)

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="loading-spinner w-8 h-8 mr-3"></div>
        <div className="text-lg text-neutral-600">{t("loading")}</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-4">
        <div className="text-lg text-error-600">
          {t("error")}: {error}
        </div>
        <button onClick={refresh} className="btn-outline">
          <RefreshCw className="h-4 w-4 mr-2" />
          {t("refresh")}
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">{t("title")}</h2>
        <button onClick={refresh} className="btn-primary">
          <RefreshCw className="h-4 w-4 mr-2" />
          {t("refresh")}
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {expenses.map((post) => (
          <div key={post.id} className="card-hover">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-neutral-800 line-clamp-2">{post.label}</h3>
              <p className="text-sm text-primary-600 font-medium">User ID: {post.id}</p>
            </div>
            <p className="text-sm text-neutral-600 line-clamp-3">{post.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
