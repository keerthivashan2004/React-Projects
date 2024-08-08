import React from 'react';
function con()
{
    let age =18;
    let name="Kiran";
    let setStatus =false;
    let userDefault=undefined;
    let responseValue=null;
    console.log(age+" "+name+" "+setStatus+" "+userDefault+" "+responseValue+"\n");
    let oldage=age;
    age=25;
    let status=setStatus;
    setStatus=true;
    console.log(age+" "+name+" "+setStatus+" "+userDefault+" "+responseValue+" "+oldage+" "+status+"\n");
    alert("Check the console output!");
    
}
const Day1pah2=()=>
{
    return(
        <div>
            <button onClick={con}>Click</button>
        </div>
    );
};
export default Day1pah2;