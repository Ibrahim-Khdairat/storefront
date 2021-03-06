import React from "react";
// Displays a list of products associated with the selected category
// https://github.com/mui-org/material-ui/blob/v5.0.1/docs/src/pages/components/cards/ImgMediaCard.js

// these for card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { stockCounter } from '../store/Products';
import { connect } from "react-redux";
import { addToCart } from "../store/Cart";


const Products = (props) => {
  return (
    <div className="productsDiv">
      {props.products.map(ele => {
        if (props.activeCategory == ele.category) {
          return (
            <div key={ele.name} className="product">
              <Card sx={{ maxWidth: 345 }} >
                <CardMedia
                  component="img"
                  width="245"
                  height ="245"
                  image={ele.imeage}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {ele.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {ele.description}
                    <br />
                    PRICE : {ele.price}
                    <br />
                    INVENTORY : {ele.inventoryCount}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small"> View</Button>
                  <Button size="small"
                    onClick={() => {
                      if (ele.inventoryCount) {
                        props.addToCart(ele)
                        props.stockCounter(ele)
                      } else {
                        alert("empty item");
                      }
                    }}>  Add to Cart</Button>                </CardActions>
              </Card>
            </div>
          )
        }
      })}
      <br />
    </div>

  )
}
const mapStateToProps = (state) => ({
  products: state.ReduceProducts.products,
  activeCategory: state.ReduceCategory.activeCategory
})

const mapDispatchToProps = { stockCounter, addToCart }

export default connect(mapStateToProps, mapDispatchToProps)(Products);