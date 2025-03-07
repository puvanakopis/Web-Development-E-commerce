import React from 'react'
import './Account.css'
import './Profile.css'

const profile = () => {
  return (
    <div className="profile common-container">
          <h2 className='main-title'>Edit Your Profile</h2>
          <form>      
            {/* User personal details section */}
            <div className='mainDetails'>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" name="firstName" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lastName"/>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email"/>
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" name="address" />
              </div>
            </div>

            {/* Password change section */}
            <h3 className="sub-title">Password Changes</h3>
            <div className="passwordDetails">
              <div className="form-group">
                <input type="password" name="currentPassword" placeholder="Current Password" />
              </div>
              <div className="form-group">
                <input type="password" name="newPassword" placeholder="New Password" />
              </div>
              <div className="form-group">
                <input type="password" name="confirmNewPassword" placeholder="Confirm New Password" />
              </div>
            </div>
            
            {/* Form action buttons */}
            <div className="form-buttons">
              <button type="button" className="cancel-button">Cancel</button>
              <button type="submit" className="save-button">Save Changes</button>
            </div>
          </form>
        </div>
  )
}

export default profile