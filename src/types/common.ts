import { Locale } from '@/i18n/dictionaries'

/**
 * A basic interface for next page
 */
export interface INextPage {
  /**
   * Next parameter
   */
  params: {
    /**
     * language
     */
    lang: Locale
  }
}
