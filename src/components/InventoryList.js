import React from 'react';

const InventoryList = ({ items, onRemove }) => {
    return (
        <div>
            <h2>Inventory List</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} 
                        <button onClick={() => onRemove(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InventoryList;
