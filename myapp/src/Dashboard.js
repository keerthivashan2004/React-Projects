import React, { useState } from 'react';
import { useEffect } from 'react';

const Dashboard = ({ user }) => {

    const [data,getData] = useState(null)

    const getTransfer=()=>{
        fetch("http://localhost:5000/transfers")
        .then(res=>res.json())
        .then(data=>{
            getData(data)
        })
    }
    useEffect(()=>{
        getTransfer()
    },[])
    return (
        <div className='done'>

        <div className='Dashboard'>
            <h2>Welcome " {user.name} "</h2>
            <p>Account Balance: Rs.{user.balance}</p>
            <div className='transfer'>
                {
                    data?.map((val,i) => {
                        return (
                        <div key={i}>
                            <p>{`Recipient : ${val.recipient}`}</p>
                            <p>{`Amount : ${val.amount}`}</p>
                        </div>
                        )
                    })
                }
            </div>
        </div>
        </div>
    );
};

export default Dashboard;
