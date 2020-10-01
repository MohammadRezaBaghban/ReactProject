import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component{

    constructor(props){
        super(props);
        this.state = {
            ingredients:{
                salad: 1,
                bacon: 2,
                cheese: 3,
                meat:2
            },
            totalPrice: 4
        }
    }
    
    addIngredientHandler = (type) => {

        const priceAddition = INGREDIENT_PRICES[type];
        const updatedIngredients = {
            ...this.state.ingredients
        };

        const updatedCount = updatedIngredients[type]+1;
        const updatedPrice = this.state.totalPrice + priceAddition;

        updatedIngredients[type] = updatedCount;

        this.setState({ingredients:updatedIngredients,totalPrice:updatedPrice});
    }

    removeIngredientHandler = (type) =>{

    }

    render(){
        
        return(
            <React.Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientsAdded = {this.addIngredientHandler}
                    ingredientsRemoved = {this.removeIngredientHandler}
                />
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;