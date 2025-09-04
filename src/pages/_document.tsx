import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* CSS Files */}
        <link href='/css/bootstrap.css' rel='stylesheet' />
        <link href='/css/style.css' rel='stylesheet' />
        <link href='/css/style-2.css' rel='stylesheet' />
        <link href='/css/responsive.css' rel='stylesheet' />
        <link href='/css/color.css' rel='stylesheet' />
        <link href='/css/flaticon.css' rel='stylesheet' />
        <link href='/css/fontawesome-all.css' rel='stylesheet' />
        <link href='/css/animate.css' rel='stylesheet' />
        <link href='/css/hover.css' rel='stylesheet' />
        <link href='/css/owl.css' rel='stylesheet' />
        <link href='/css/jquery.fancybox.min.css' rel='stylesheet' />
        <link href='/css/jquery-ui.css' rel='stylesheet' />
        <link href='/css/scrollbar.css' rel='stylesheet' />

        {/* Font Awesome CDN */}
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
        />

        {/* Favicon */}
        <link
          rel='shortcut icon'
          href='/images/favicon.png'
          type='image/x-icon'
        />
        <link rel='icon' href='/images/favicon.png' type='image/x-icon' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
