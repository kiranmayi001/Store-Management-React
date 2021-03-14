import React, { useState, useEffect } from 'react';
import  productsData from '../../data/products'; 

function CreateOrder(props) {
    const [customerName, setCustomerName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [products, setProducts] = useState([]);

    


    const addProduct = () => {
        const updated=products;
        updated.push({ id: '', price: '', quantity: ''});
        console.log(updated);
        setProducts(updated);
    }

    const removeProduct = (productId) => {
        const updated=products.filter(product => product.id!=productId);
        console.log(updated);
        setProducts(updated);
    }

    const handleProductSelect = (productId, index) => {
        if(!productId) return;
        const product = productsData.filter(product => product.id==productId);
        const updated=products;
        updated[index]={id: product.id, price: product.price, quantity: product.quantity};
        console.log(updated);
        setProducts(updated);
    }

    const handleCustomerDetailChange= e => {
        e.preventDefault();
        if(e.target.name==="customerName") return setCustomerName(e.target.value);
        if(e.target.name==="contactNumber") return setContactNumber(e.target.value);

    }

    const placeOrder = () => {
        console.log('Order Placed');
    }

    return (
        <div>
            <div>
                <input type="text" name="customerName" value={customerName}  onChange={handleCustomerDetailChange} />
                <input type="text" name="contactNumber" value ={contactNumber} onChange={handleCustomerDetailChange} />
            </div>
            <div>Add Products</div>
            <table>
                <thead>
                <tr> 
                    <th>Product Name</th>
                    <th>Product Id</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {products.length > 0 && products.map((product, index) =>
                     <tr key={product.id+'-'+index}>
                         <td>
                            <select name="name" id="product" 
                                onChange={() => handleProductSelect(product.id, index)}
                            >
                            {productsData.length > 0 && productsData.map(product =>
                                <option value={product.id}>{product.name}</option>
                            )}
                            </select>  
                         </td>
                         <td>{product.id}</td>   
                         <td>{product.price}</td>
                         <td>{product.quantity}</td>
                         <td>
                             <button onClick={() => removeProduct(product.id)}></button>
                         </td>
                     </tr>
                )}
                </tbody>
                <button onClick={addProduct}>Add Product</button>
            </table>
            <div>
                <button onClick={placeOrder}>Place Order</button>
            </div>
        </div>
    )
}

export default CreateOrder
