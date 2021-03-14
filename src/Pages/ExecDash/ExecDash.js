import React, { useState } from 'react'
import ExecNav from '../../Components/ExecNav/ExecNav';
import Orders from '../../Components/Orders/Orders';
import CreateOrder from '../../Components/CreateOrder/CreateOrder';

function ExecDash(props) {
    const [showOrders, setShowOrders] = useState(true);
    const [showCreateOrder, setShowCreateOrder] = useState(false); 
    return (
        <div>
            Hello Exec!
            <ExecNav 
                showOrders={showOrders}
                setShowOrders={setShowOrders}
                showCreateOrder={showCreateOrder}
                setShowCreateOrder={setShowCreateOrder}
            />
            {showOrders && <Orders />}
            {showCreateOrder && <CreateOrder />}
        </div>
    )
}

export default ExecDash
