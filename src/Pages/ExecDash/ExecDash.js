import React, { useState, useEffect } from 'react'
import ExecNav from '../../Components/ExecNav/ExecNav';
import Orders from '../../Components/Orders/Orders';
import CreateOrder from '../../Components/CreateOrder/CreateOrder';

function ExecDash(props) {
    const [showOrders, setShowOrders] = useState(true);
    const [showCreateOrder, setShowCreateOrder] = useState(false); 
    const [username, setUsername] = useState(null);
    useEffect(() => {
        const loggedIn = localStorage.getItem('loggedIn') ? JSON.parse(localStorage.getItem('loggedIn')) : null;
        if(!loggedIn)
            return props.history.push('/');
        if(loggedIn.role=='admin')
            return props.history.push('/dashboard/admin');
        if(loggedIn.role=='exec')
            setUsername(loggedIn.username);
    }, [])
    return (
        <div>
            Hello Exec!
            <ExecNav 
                showOrders={showOrders}
                setShowOrders={setShowOrders}
                showCreateOrder={showCreateOrder}
                setShowCreateOrder={setShowCreateOrder}
            />
            {showOrders && <Orders username={username}/>}
            {showCreateOrder && <CreateOrder />}
        </div>
    )
}

export default ExecDash
