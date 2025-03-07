import React from 'react'
import './Account.css'
import './addressBook.css'

const addressBook = () => {
  return (
    <div className="address-book common-container">
    <h2 className='main-title'>Address Book</h2>
    <form>      
      {/* User Address Book Section */}
      <h3 className="sub-title">Manage Your Addresses</h3>
      <div className="address-item">
        <p>John Doe</p>
        <p>123 Main Street, Apartment 4B</p>
        <p>New York, NY 10001, USA</p>
        <p>📞 (123) 456-7890</p>
        <div className="address-actions">
          <button type="button" className="mainButton ">Edit</button>
          <button type="button" className="mainButton ">Delete</button>
          <button type="button" className="mainButton ">Set as Default</button>
        </div>
      </div>

      {/* Add New Address Section */}
      <h3 className="sub-title">Add New Address</h3>
      <div className="addressDetails">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="fullName" />
        </div>
        <div className="form-group">
          <label>Street Address</label>
          <input type="text" name="streetAddress" />
        </div>
        <div className="form-group">
          <label>Apartment/Suite (Optional)</label>
          <input type="text" name="apartment" />
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" name="city" />
        </div>
        <div className="form-group">
          <label>State/Province</label>
          <input type="text" name="state" />
        </div>
        <div className="form-group">
          <label>Zip/Postal Code</label>
          <input type="text" name="zipCode" />
        </div>
        <div className="form-group">
          <label>Country</label>
          <select name="country" className='country'>
            <option value="usa">United States</option>
            <option value="canada">Canada</option>
            <option value="uk">United Kingdom</option>
          </select>
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" name="phoneNumber" />
        </div>
      </div>

      {/* Form Action Buttons */}
      <div className="form-buttons">
        <button type="button" className="cancel-button">Cancel</button>
        <button type="submit" className="save-button">Save Address</button>
      </div>
    </form>
  </div>
  )
}

export default addressBook