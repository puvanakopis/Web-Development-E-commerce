import React, { useState } from 'react';
import './Account.css';
import Profile from './profile'
import AddressBook from './addressBook'
import Payment from './Payment'
import Returns from './Returns'
import Cancelled from './Cancelled'

const Account = () => {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <div className='account'>

      {/* ------------------ Sidebar navigation ------------------ */}
      <div className="nav">
        <h3>Manage My Account</h3>
        <ul>
          <li onClick={() => setActiveSection('profile')} className={activeSection === 'profile' ? 'active' : ''}>My Profile</li>
          <li onClick={() => setActiveSection('addressBook')} className={activeSection === 'addressBook' ? 'active' : ''}>Address Book</li>
          <li onClick={() => setActiveSection('payment')} className={activeSection === 'payment' ? 'active' : ''}>My Payment Options</li>
        </ul>

        <h3>My Orders</h3>
        <ul>
          <li onClick={() => setActiveSection('returns')} className={activeSection === 'returns' ? 'active' : ''}>My Returns</li>
          <li onClick={() => setActiveSection('cancelled')} className={activeSection === 'cancelled' ? 'active' : ''}>My Cancellations</li>
        </ul>

        <h3>My WishList</h3>
      </div>


      {/* ------------------  section ------------------ */}
      {activeSection === 'profile' && (
        <Profile />
      )}

      {activeSection === 'addressBook' && (
        <AddressBook />
      )}

      {activeSection === 'payment' && (
        <Payment />
      )}

      {activeSection === 'returns' && (
        <Returns />
      )}

      {activeSection === 'cancelled' && (
        <Cancelled />
      )}

    </div>
  );
};

export default Account;
