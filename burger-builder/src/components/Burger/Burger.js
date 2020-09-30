import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) =>{

    let transformedIngredients = Object.keys(props.ingredients).map(igKey =>{
        return [...Array(props.ingredients[igKey])].map((_,index) =>
            <BurgerIngredient key={igKey+index} type={igKey}/>
        );
    });

    const flattenedArray = transformedIngredients.reduce((arr,el) => { return  arr.concat(el) },[]);

    if(flattenedArray.length===0){
        transformedIngredients= <p>Please Add Ingredients</p>
    }
    
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>

        </div>
    );
};

export default burger;