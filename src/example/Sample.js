import React from 'react'
import Sample1 from './Sample1'


function Namedfunction(){
    return (
        <h2>Named Function</h2>
    )
}

var Arrowfunction=()=>{
    return (
        <h3>Arrow Function</h3>
    )
}

function Sample(){
    return (
        <div>
        <h1>Sample Component</h1>
        <Namedfunction></Namedfunction>
        <Arrowfunction></Arrowfunction>
        <Sample1></Sample1>
        </div>
    )

}
export default Sample;