import { useState } from 'react'
import clsx from 'clsx'
import './App.css'

function App() {
  const [isActive, setIsActive] = useState(true)
  const [isDisabled, setIsDisabled] = useState(true)
  return (
    <div className={clsx('App', 
    {
      'active': isActive,
      'inactive': isActive === false,
      'disabled': isDisabled,
      'enabled': !isDisabled
    }
    //TODO: like this above object i can define tailwind classes
    )}>
      <button onClick={()=> setIsActive(!isActive)}>
        Toggle 1
      </button>
      <button  onClick={()=> setIsDisabled(!isDisabled)}>
        Toggle 2
      </button>
    </div>
  )
}

export default App