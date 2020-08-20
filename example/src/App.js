import React from 'react'

import { If } from 'aspencx'
import 'aspencx/dist/index.css'

const App = () => {
  return (
    <>
      <If test={true}>
        <h3>Hello!</h3>
      </If>
    </>
  )
}

export default App
