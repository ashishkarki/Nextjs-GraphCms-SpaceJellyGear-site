import Head from 'next/head'

export default function ErrorPage({ statusCode = 999 }) {
  return (
    <>
      <Head>Error page Head</Head>

      <body>
        <h1>Error with status {statusCode}</h1>
      </body>
    </>
  )
}
