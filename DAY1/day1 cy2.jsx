import React from 'react';
let directions=["North","South","East","West"];
function mapparray()
{
    const mapp=directions.map(direction=>direction+" News");
    console.log(mapp);
}
function joinarray()
{
    const joinn=directions.join(",");
    console.log(joinn);
}
const Day1ch2=()=>
{
    return (
        <>
        <button onClick={mapparray}>Map</button>
        <button onClick={joinarray}>Join</button>
        </>
    )
}
export default Day1ch2;