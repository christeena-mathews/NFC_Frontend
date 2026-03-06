import React from 'react';

const OrderList = () => {
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        // Fetch orders from an API or a data source
        const fetchOrders = async () => {
            const response = await fetch('/api/orders');
            const data = await response.json();
            setOrders(data);
        };

        fetchOrders();
    }, []);

    const handleDeleteOrder = (orderId) => {
        // Deleting the order logic
        const updatedOrders = orders.filter(order => order.id !== orderId);
        setOrders(updatedOrders);
    };

    return (
        <div>
            <h1>Order List</h1>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        <span>{order.name} - {order.status}</span>
                        <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;