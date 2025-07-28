import { ColorPaletteDemo } from "@/components/color-palette-demo"
import { I18nProvider } from "@/components/i18n-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ColorPalettePage() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <header className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="font-medium">Back to Home</span>
              </Link>
              <div className="h-6 w-px bg-neutral-300"></div>
              <h1 className="text-4xl font-bold text-gradient-primary">Color Palette</h1>
            </div>
            <LanguageSwitcher />
          </header>
          <main>
            <ColorPaletteDemo />
          </main>
        </div>
      </div>
    </I18nProvider>
  )
}
