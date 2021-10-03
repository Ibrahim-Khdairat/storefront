/*
Active Category
State should store active category
Other components (products, etc) might need to reference this
*/
import React from "react";
import { connect } from "react-redux";
/*
Add another component called <ActiveCategory /> 
that appears above the products list that might better inform the user 
as to the name/description of the currently active category
*/
const ActiveCategory=(props)=>{
    return  (
        <>
        <h1 style={{marginLeft:'600px'}}> {props.ActiveCategory}</h1>
        <h3 style={{marginLeft:'600px'}}>{props.ActiveCategory && `ALL ${props.ActiveCategory}S YOU WANT HERE`}  </h3>

     


        </>
    )
}
// to handel category state 
const mapStateToProps = state => ({

    ActiveCategory: state.ReduceCategory.activeCategory,
    Description: state.ReduceCategory.categories,

    
});
export default connect(mapStateToProps)(ActiveCategory);