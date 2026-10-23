import { useState } from 'react'
import ProgressBar from './components/ProgressBar'
import PersonalInfoForm from './components/PersonalInfoForm'
import AddressForm from './components/AddressForm'

function App() {
  const [step, setStep] = useState(1)

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDob] = useState('')

  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [postalCode, setPostalCode] = useState('')

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
      {step === 2 && (
        <AddressForm
          street={street}
          setStreet={setStreet}
          city={city}
          setCity={setCity}
          country={country}
          setCountry={setCountry}
          postalCode={postalCode}
          setPostalCode={setPostalCode}
        />
      )}
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