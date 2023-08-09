import '../globals.css'

import React from 'react'

import { Inter } from 'next/font/google'

import { INextPage } from '@/types/common'

const inter = Inter({ subsets: ['latin'] })

/**
 * Root layout props
 */
interface IRootLayout extends INextPage {
  /**
   * a component / react node
   */
  children: React.ReactNode
}

const RootLayout = (props: IRootLayout) => {
  return (
    <html lang={props.params.lang}>
      <body className={inter.className} data-testid="container__application">
        {props.children}
      </body>
    </html>
  )
}

export default RootLayout
