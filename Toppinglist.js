import React, {useEffect, useState} from 'react' 
import Topping from './Toppings'

const ToppingList = () => {

    const [favorite, setFavorite] = useState('...')

    const [listOfToppings, setListOfToppings] = useState([])
    
    useEffect(() => {
        setListOfToppings(['cheese', 'hot honey', 'pineapple', 'bacon'])
        
    },[])
    

    return(
        
        <div>
            <h1>The favorite pizza topping is {favorite}</h1>
            
            
            <ul>

           
                
                {listOfToppings.map((topping) => 
                   
                        <div key={topping}>

                            <Topping topping={topping} changeView={setFavorite}/>
                        </div>
                    
                )}
  
            </ul>
        </div>
    )
}

export default ToppingList