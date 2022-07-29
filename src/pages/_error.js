import ErrorPage from './404'

const Error = ({ statusCode }) => {
  return <ErrorPage statusCode={statusCode} />
}

Error.getInitialProps = ({ res, err }) => {
  const resDerivedStatusCode = res?.statusCode
  const errDerivedStatusCode = err ? err.statusCode : 404
  const statusCode = resDerivedStatusCode ?? errDerivedStatusCode

  console.log(
    err ??
      `Something failed with status code ${statusCode} but no error was generated at _error`
  )

  return { statusCode }
}

Error.defaultProps = {
  statusCode: 500,
}

export default Error
