import React, { useState } from 'react';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    const addCustomer = (customer) => {
        setCustomers([...customers, customer]);
    };

    const removeCustomer = (customerId) => {
        setCustomers(customers.filter(customer => customer.id !== customerId));
    };

    return (
        <div>
            <h2>Customer List</h2>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>
                        {customer.name} <button onClick={() => removeCustomer(customer.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            {/* Example usage of addCustomer function */}
            <button onClick={() => addCustomer({ id: Date.now(), name: 'New Customer' })}>Add Customer</button>
        </div>
    );
};

export default CustomerList;