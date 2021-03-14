import React from 'react'

function ExecNav(props) {
    const { showOrders, setShowOrders, showCreateOrder, setShowCreateOrder } = props;
    return (
        <div>
            <button onClick={() => setShowOrders(!showOrders)}>View Orders</button>
            <button onClick={() => setShowCreateOrder(!showCreateOrder)}>Create Orders</button>
        </div>
    )
}

export default ExecNav;
