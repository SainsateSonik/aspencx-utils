import React, { Fragment } from 'react'

export default function If({ test, children }) {
  if (!test) return null
  return <Fragment>{children}</Fragment>
}
