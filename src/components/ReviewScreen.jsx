function ReviewScreen({
  fullName, email, dob,
  street, city, country, postalCode,
  idType, idFile,
}) {
  return (
    <div className="form">
      <h2>Review your details</h2>

      <h3>Personal info</h3>
      <p>Name: {fullName}</p>
      <p>Email: {email}</p>
      <p>Date of birth: {dob}</p>

      <h3>Address</h3>
      <p>{street}</p>
      <p>{city}, {postalCode}</p>
      <p>{country}</p>

      <h3>ID</h3>
      <p>Type: {idType}</p>
      <p>File: {idFile ? idFile.name : 'No file uploaded'}</p>
    </div>
  )
}

export default ReviewScreen