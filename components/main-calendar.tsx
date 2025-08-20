"use client"

import { container } from "@/container/dependencies"
import { useExpenses } from "@/hooks/use-expense"
import { useI18n } from "./i18n-provider"
import { RefreshCw } from "lucide-react"

export function MainCalendar() {
  const { t } = useI18n()
  const { loading, error, refresh } = useExpenses(container.expenseService)

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
        Hello world
      </div>
    </div>
  )
}
