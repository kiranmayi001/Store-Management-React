import React, { Fragment, useEffect, useState} from 'react';
import ordersData from '../../data/orders';

function Order(props) {
    const [order, setOrder] = useState(null);
    
    useEffect(() => {
        const orderId = props.match.params.orderId;
        if(!orderId) return;
        const currentOrder = ordersData.filter(order => order.id==orderId);
        setOrder(currentOrder);
    }, [])

    return (
        <div>
        {order &&
        <Fragment>
            {/* Regular fields */}
        <div>

            <table>
                <tr>
                    <th>Field</th>
                    <th>Value</th>
                </tr>
                <tr>
                  <td>Customer Name</td>
                  <td>{order.customerName}</td>  
                </tr>
                <tr>
                  <td>Contact Number</td>
                  <td>{order.contactNumber}</td>  
                </tr>
                <tr>
                  <td>Total Amt</td>
                  <td>{order.totalAmt}</td>  
                </tr>
                
            </table>
        </div>
        {/* Products  Table */}
        <div>
            <table>
                <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
                </thead>
                <tbody>
                {order.products && order.products.length > 0 && order.products.map((product, index) =>
                     <tr key={order.id+'-'+product.id+'-'+index}>
                         <td>{product.id}</td>
                         <td>{product.name}</td>
                         <td>{product.price}</td>
                         <td>{product.quantity}</td>
                     </tr>
                )}
                </tbody>
            </table>
        </div>
        </Fragment>}
        </div>  
       
    )
}

export default Order
