import React from "react";
import { Breadcrumbs, Link } from "@mui/material";
import { connect } from "react-redux";
import { active, reset } from '../store/Categories'

const Categories = (props) => {
    console.log(props.ReduceCategory);
    // 1. Shows a list of all categories
    // 2. Dispatches an action when one is clicked to “activate” it
    return (
        <div className = "categories">
            <h2 style={{margin:'15px'}}>
                Browse our Categories
            </h2>
            <Breadcrumbs aria-label="breadcrumb" style={{margin:'30px'}}>
                {props.ReduceCategory.map(ele=>{
                    return(
                        <Link className = "link" color="inherit" onClick={()=>props.active(ele.normalizedName)}>
                        {ele.normalizedName}
                      </Link>
                    )
                })}
                
            </Breadcrumbs>
        </div>
    )
}

const mapStateToProps = state => ({
    ReduceCategory: state.ReduceCategory.categories
});

const mapDispatchToProps = { active, reset };


export default connect(mapStateToProps,mapDispatchToProps)(Categories);