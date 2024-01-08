import { useState } from "react";
import { Button, Card  } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/features/cartSlice";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

export default function ProductCard(props) {
  const { name, category, brand, id, cover, price, rate } = props.item;
  const dispatch = useDispatch();
  const [rating, setRating]  = useState(0)

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <Card className="product-card">
      <Card.Img variant="top" src={cover} style={{height:'280px', width:'100%', }}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{category}</Card.Text>
        <Card.Text style={{fontWeight:'bold'}}>{brand}</Card.Text>
       
        <div className="star-rating" style={{marginBottom: "10px",display:"flex"}}>
          {[...Array(rate)].map((star, index) => {index += 1;
          return (
            <StarIcon key={index} color="#FBBF24" style={{ width: "20px", height: "20px" }} className={index <= rating ? "on" : "off"}/>
        );
          })}
        </div>
      <Card.Title>{price} DT</Card.Title>
      <div className="overlay" onClick={() => handleAddToCart(props.item)}>
        <div style={{display:'flex', color:'white', margin:'0 auto 0 auto', paddingTop:'28px', textAlign:'center', alignItems:'center', justifyContent:'center'}}>
        <h4 style={{textAlign:'center', marginRight:'10px', }}>Add to cart</h4>
        <div>
          <ShoppingBagIcon style={{ width: "25px", height: "25px", marginTop:'-12px'  }} />
        </div>
      </div>
    </div>
    </Card.Body>
    </Card>
  );
}
