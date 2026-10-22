import { useState } from 'react'

function PersonalInfoForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDob] = useState('')

  return (
    <div className="form">
      <label>Full name</label>
      <input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Type a fake name"
      />
       <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="test@example.com"
      />

      <label>Date of birth</label>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
    </div>
  )
}

export default PersonalInfoForm