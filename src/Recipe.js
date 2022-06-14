import React from 'react'

const Recipe = ({title,calories,image,ingredients}) => {
    return (

            <div className="card" style={{width: '30rem'}}>
                <img src={image} className="card-img-top" alt=""  /> 
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <ol>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text} </li>
                    ))}
                </ol>
                <h3>THE CALORIES:</h3>
            
                <p className="card-text">{calories}</p>
                
            </div>
            </div>

        // <div >
        //     <h1>{title}</h1>
            // <ol>
            //     {ingredients.map(ingredient => (
            //         <li>{ingredient.text} </li>
            //     ))}
            // </ol>
        //     <h3>THE CALORIES:</h3>
        //     <p>{calories}</p>
        //     <img src={image} alt=""  />   
        // </div>
    )
}

export default Recipe
