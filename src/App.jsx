import PersonalInfoForm from './components/PersonalInfoForm'
import { useState } from 'react'
import ProgressBar from './components/ProgressBar'

function App() {
  const [step, setStep] = useState(1)

  return (
    <div>
      <h1>Open Your Account</h1>
      <p>Verify your identity in a few quick steps.</p>
      <ProgressBar currentStep={step} />
      <PersonalInfoForm />
      <p>You are on step {step} of 4</p>
      <button onClick={() => setStep(step + 1)}>Next</button>
    </div>
  )
}

export default App