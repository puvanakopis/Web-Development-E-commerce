import React, { useState } from 'react'
import './Account.css'
import './Payment.css'

const Payment = () => {

    const [paymentMethods, setPaymentMethods] = useState([
        { id: 1, type: "Visa", last4: "1234", expiry: "12/25", default: true },
        { id: 2, type: "MasterCard", last4: "5678", expiry: "08/26", default: false },
    ]);

    const handleDelete = (id) => {
        setPaymentMethods(paymentMethods.filter((method) => method.id !== id));
    };



    return (
        <div className="paymentOptions common-container">
            <h2 className='main-title'>My Payment Options</h2>
            <form>
                {/* Saved Payment Methods */}
                <h3 className="sub-title">Saved Payment Methods</h3>
                <div className="savedPayments">
                    {paymentMethods.map((method) => (
                        <div key={method.id} className="paymentCard">
                            <p><strong>{method.type} **** {method.last4}</strong></p>
                            <p>Expires: {method.expiry}</p>
                            <div className="paymentActions">
                                <button type="button" className="mainButton editButton">Edit</button>
                                <button type="button" onClick={() => handleDelete(method.id)} className="mainButton deleteButton">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add New Payment Method */}
                <h3 className="sub-title">Add New Payment Method</h3>
                <div className="paymentForm">
                    <div className="form-group">
                        <label>Cardholder Name</label>
                        <input type="text" name="cardholderName" />
                    </div>
                    <div className="form-group">
                        <label>Card Number</label>
                        <input type="text" name="cardNumber" placeholder="**** **** **** ****" />
                    </div>
                    <div className="form-group">
                        <label>Expiration Date</label>
                        <input type="text" name="expiryDate" placeholder="MM/YY" />
                    </div>
                    <div className="form-group">
                        <label>CVV</label>
                        <input type="password" name="cvv" placeholder="***" />
                    </div>
                </div>

                {/* Form Buttons */}
                <div className="form-buttons">
                    <button type="button" className="mainButton cancelButton">Cancel</button>
                    <button type="submit" className="mainButton saveButton">Save Payment Method</button>
                </div>
            </form>
        </div>
    )
}

export default Payment