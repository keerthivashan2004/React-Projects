import React from 'react';

const AccountDetails = ({ user }) => {
    return (
        <div>
            <h2>Account Details</h2>
            <p>Name: {user.name}</p>
            <p>Account Number: {user.accountNumber}</p>
            <p>Balance: ${user.balance}</p>
            {/* Add more account details here */}
        </div>
    );
};

export default AccountDetails;
