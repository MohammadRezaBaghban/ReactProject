import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
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
        }
    }
    

    render(){
        return(
            <React.Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;