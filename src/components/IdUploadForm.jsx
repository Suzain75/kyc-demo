function IdUploadForm({ idType, setIdType, idFile, setIdFile }) {
  return (
    <div className="form">
      <label>ID type</label>
      <select value={idType} onChange={(e) => setIdType(e.target.value)}>
        <option value="">Select an ID type</option>
        <option value="Passport">Passport</option>
        <option value="National ID">National ID</option>
        <option value="Driver's license">Driver's license</option>
      </select>

      <label>Upload ID image</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setIdFile(e.target.files[0])}
      />

      <p>{idFile ? 'Selected: ' + idFile.name : 'No file selected yet'}</p>
      <p className="note">Demo only: use any random picture, never a real ID.</p>
    </div>
  )
}

export default IdUploadForm