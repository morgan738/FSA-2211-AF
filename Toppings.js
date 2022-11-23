import React from "react";

const Topping = (props) => {
    console.log(props)


    return(
        <li onClick={() => props.changeView(props.topping)}> {props.topping} </li>
        
        
    )

}

export default Topping