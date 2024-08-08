import React from 'react';
function compare()
{
  const name1="Kabil";
  const name2="Kabil";
  const object1={name1:"Kabil"};
  const object2={name2:"Kabil"};
  if((name1===name2)===true)
  {
    console.log("primitive data type");
  }
  
  if((object1===object2)===true)
  {
    console.log("reference data type");
  }
  
}
const Day1ch1=()=>
{
    return(
        <div>
        <button onClick={compare}>Click</button>;
        </div>
    );
};
export default Day1ch1;