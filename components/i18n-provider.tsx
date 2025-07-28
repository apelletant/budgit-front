"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es" | "fr"

interface Translations {
  [key: string]: {
    [key in Language]: string
  }
}

const translations: Translations = {
  title: {
    en: "Data from Server",
    es: "Datos del Servidor",
    fr: "Données du Serveur",
  },
  loading: {
    en: "Loading...",
    es: "Cargando...",
    fr: "Chargement...",
  },
  error: {
    en: "Error loading data",
    es: "Error al cargar datos",
    fr: "Erreur lors du chargement",
  },
  refresh: {
    en: "Refresh Data",
    es: "Actualizar Datos",
    fr: "Actualiser les Données",
  },
  language: {
    en: "Language",
    es: "Idioma",
    fr: "Langue",
  },
}

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function useI18n(): I18nContextType {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return <I18nContext.Provider value={{ language, setLanguage, t }}>{children}</I18nContext.Provider>
}
