function AddressForm({
  street, setStreet,
  city, setCity,
  country, setCountry,
  postalCode, setPostalCode,
}) {
  return (
    <div className="form">
      <label>Street address</label>
      <input
        type="text"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        placeholder="123 Test Street"
      />

      <label>City</label>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Test City"
      />

      <label>Country</label>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="">Select a country</option>
        <option value="Qatar">Qatar</option>
        <option value="India">India</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="United States">United States</option>
      </select>

      <label>Postal code</label>
      <input
        type="text"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        placeholder="00000"
      />
    </div>
  )
}

export default AddressForm