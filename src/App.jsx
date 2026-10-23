import { useState } from 'react'
import ProgressBar from './components/ProgressBar'
import PersonalInfoForm from './components/PersonalInfoForm'

function App() {
  const [step, setStep] = useState(1)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDob] = useState('')

  return (
    <div>
      <h1>Open Your Account</h1>
      <p>Verify your identity in a few quick steps.</p>
      <ProgressBar currentStep={step} />

      {step === 1 && (
        <PersonalInfoForm
          fullName={fullName}
          setFullName={setFullName}
          email={email}
          setEmail={setEmail}
          dob={dob}
          setDob={setDob}
        />
      )}
      {step === 2 && <div className="form">Address form coming soon</div>}
      {step === 3 && <div className="form">ID upload coming soon</div>}
      {step === 4 && <div className="form">Review coming soon</div>}

      <button onClick={() => setStep(step - 1)} disabled={step === 1}>
        Back
      </button>
      <button onClick={() => setStep(step + 1)} disabled={step === 4}>
        Next
      </button>
    </div>
  )
}

export default App