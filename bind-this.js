import { Component,useState } from "react";


class Child extends Component {
    constructor(){
        super();  
        this.handleIncrement =  this.handleIncrement.bind(this)
        this.state = {
            num : 0
        }
    }
    handleIncrement(event){
        console.log('this ========>',this)
        console.log('event ========>',event)
    }
    render(){
        return(
            <>
            <h1>{this.state.num}</h1>
            <button onClick={this.handleIncrement}>Add</button>
            </>
        )
    }
}
export default Child
