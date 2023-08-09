'use client'

import { createContext, useContext } from 'react'

import { IDictionary } from './type'

/**
 * Translation properties
 */
interface ITranslationContext {
  /**
   * A translation
   */
  translation: IDictionary
}

/**
 * Translation provider props
 */
interface ITranslationProvider extends ITranslationContext {
  /**
   * A children
   */
  children: React.ReactNode
}

const TranslationContext = createContext<ITranslationContext>({
  translation: {} as any,
})

export const useTranslation = () => useContext(TranslationContext).translation

export const TranslationProvider = ({
  children,
  translation,
}: ITranslationProvider) => {
  return (
    <TranslationContext.Provider value={{ translation }}>
      {children}
    </TranslationContext.Provider>
  )
}
