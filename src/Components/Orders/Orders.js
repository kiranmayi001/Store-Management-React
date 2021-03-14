    import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ordersData from '../../data/orders';

function Orders(props) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(!props.username) return;
        const execOrders = ordersData.filter(order => order.createdBy==props.username);
        setOrders(execOrders);
    }, []);

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>customer name</th>
                    <th>contact number</th>
                    <th>products</th>
                    <th>total amt</th>
                </tr>
                </thead>
                <tbody>
                {orders.map(({ id, customerName, contactNumber, totalAmt }, index) =>
                    <tr key={id+'-'+index}>
                        <td>
                            <Link to={`/${id}`}></Link>{id}
                        </td>
                        <td>{customerName}</td>
                        <td>{contactNumber}</td>
                        <td>{totalAmt}</td>
                    </tr>
                )} 
            
            </tbody>
            </table>
        </div>
    )

}

export default Orders;
