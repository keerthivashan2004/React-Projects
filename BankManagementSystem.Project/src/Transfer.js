import React, { useState } from 'react';

const Transfer = ({ user , setUser }) => {
    const [amount, setAmount] = useState('');
    const [recipient, setRecipient] = useState('');

    const handleTransfer = () => {
        if (!amount || !recipient) {
            console.error('Amount and recipient are required');
            return;
        }

        const transferData = {
            sender: user.username, 
            recipient,
            amount: parseFloat(amount),
            date: new Date().toISOString() 
        };

        fetch('http://localhost:5000/transfers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transferData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            let updateUser = user
            updateUser['balance'] = updateUser['balance'] - amount
            console.log(updateUser)
            setUser(updateUser)
            console.log('Transfer successful:', data);
            setAmount('');
            setRecipient('');
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div>
            <h2>Transfer Funds</h2>
            <input
                type="text"
                placeholder="Recipient Account"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleTransfer}>Transfer</button>
        </div>
    );
};

export default Transfer;
