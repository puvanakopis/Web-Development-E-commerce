import React from 'react';
import './Returns.css'

const Returns = () => {
    const returnOrders = [
        {
            orderId: '123456',
            status: 'Processing',
            product: 'Wireless Headphones',
            requestedOn: 'March 5, 2025',
        },
        {
            orderId: '789012',
            status: 'Completed',
            product: 'Smartwatch',
            requestedOn: 'February 20, 2025',
        },
        {
            orderId: '345678',
            status: 'Pending',
            product: 'Bluetooth Speaker',
            requestedOn: 'March 3, 2025',
        },
        {
            orderId: '901234',
            status: 'Processing',
            product: 'Gaming Mouse',
            requestedOn: 'March 7, 2025',
        },
        {
            orderId: '567890',
            status: 'Completed',
            product: 'Mechanical Keyboard',
            requestedOn: 'February 25, 2025',
        }
    ];

    return (
        <div className="returns common-container">
            <h2 className='main-title'>My Returns</h2>

            {returnOrders.length > 0 ? (
                returnOrders.map((order, index) => (
                    <div key={index} className="return-item">
                        <p><strong>Order #{order.orderId}</strong></p>
                        <p>Return Status: <span className={`status ${order.status.toLowerCase().replace(' ', '-')}`}>{order.status}</span></p>
                        <p>Product: <strong>{order.product}</strong></p>
                        <p>Return Requested On: <strong>{order.requestedOn}</strong></p>
                        <div className="return-actions">
                            <button className="mainButton track-button">Track Return</button>
                            {order.status === 'Processing' || order.status === 'Pending Approval' ? (
                                <button className="mainButton cancel-return-button">Cancel Request</button>
                            ) : null}
                        </div>
                    </div>
                ))
            ) : (
                <p className="no-returns">You have no active return requests.</p>
            )}
        </div>
    );
};

export default Returns;
