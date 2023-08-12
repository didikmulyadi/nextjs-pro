import Script from 'next/script'

import { ENV } from '@/config/env'

export const GoogleAnalytic = () => {
  const measurementID = ENV.GOOGLE_ANALYTIC_MEASUREMENT_ID
  if (!measurementID) {
    return
  }

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js? 
      id=${measurementID}`}
      ></Script>
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${measurementID}');
        `,
        }}
      ></Script>
    </>
  )
}
