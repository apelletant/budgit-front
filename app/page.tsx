import { DataFetcher } from "@/components/data-fetcher"
import { LanguageSwitcher } from "@/components/language-switcher"
import { I18nProvider } from "@/components/i18n-provider"
import { AddExpense } from "@/components/form/add-expense"
import { MainCalendar } from "@/components/main-calendar"

export default function Home() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gradient-primary">Bugit</h1>
            <LanguageSwitcher />
          </header>
          <main className="space-y-12">
            <DataFetcher />
            <MainCalendar />
            <AddExpense />
          </main>
        </div>
      </div>
    </I18nProvider>
  )
}
