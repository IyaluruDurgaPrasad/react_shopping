import {useState} from 'react'
function Event(){
    const[number,setNumber]=useState(0)
    var increment=()=>{
        setNumber(number+1)
    }
    var decrement=()=>{
        if (number>0){
        setNumber(number-1)
        }
    }

    var reset=()=>{
        setNumber(0)
    }
    return (
        <div>
            <h2>Result :{number}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

}
export default Event