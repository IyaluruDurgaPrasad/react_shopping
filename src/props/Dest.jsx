function Dest(props){
    const{car,model,year}=props.car
    return(
        <div>
            <h1>{car}</h1>
            <h1>{model}</h1>
            <h1>{year}</h1>
        </div>

    )
}

export default Dest