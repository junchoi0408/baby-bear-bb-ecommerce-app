import React from 'react'

const History = ({ orderId, orderPrice, orderDate}) => {
    return (
        <div className="history__items">
            <p className="history__item">Order ID: { orderId }</p>
            <p className="history__item">Order Date: { orderDate }</p>
            <p className="history__item">Total Price: { orderPrice }</p>
        </div>
    )
}

export default History
