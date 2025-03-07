import React from 'react';
import './Cancelled.css'

const Cancellations = () => {
    const cancelledOrders = [
        {
            orderId: '654321',
            status: 'Cancelled',
            product: 'Laptop Stand',
            cancelledOn: 'March 2, 2025',
            reason: 'Changed my mind'
        },
        {
            orderId: '210987',
            status: 'Cancelled',
            product: 'Wireless Charger',
            cancelledOn: 'February 28, 2025',
            reason: 'Found a better price'
        },
        {
            orderId: '876543',
            status: 'Cancelled',
            product: 'Noise Cancelling Headphones',
            cancelledOn: 'March 4, 2025',
            reason: 'Ordered by mistake'
        }
    ];

    return (
        <div className="cancellations common-container">
            <h2 className='main-title'>My Cancellations</h2>

            {cancelledOrders.length > 0 ? (
                cancelledOrders.map((order, index) => (
                    <div key={index} className="cancellation-item">
                        <p><strong>Order #{order.orderId}</strong></p>
                        <p>Product: <strong>{order.product}</strong></p>
                        <p>Cancelled On: <strong>{order.cancelledOn}</strong></p>
                        <p>Reason: <strong>{order.reason}</strong></p>
                        <div className="cancellation-actions">
                            <button className="mainButton reorder-button">Reorder</button>
                        </div>
                    </div>
                ))
            ) : (
                <p className="no-cancellations">You have no cancelled orders.</p>
            )}
        </div>
    );
};

export default Cancellations;
