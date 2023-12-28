import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
// import { useAppDispatch } from "../../../../store/hooks";
// import { addToCart } from "../../../cart/cartSlice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import GameInterface from "../../interfaces/GameInterface";

// import DiscountComponent from "../../../cart/utils/DiscountComponent";
interface GameCardProps {
  game: GameInterface;
}
const ProductDetailsCard: React.FC<GameCardProps> = ({ game }) => {
  // const dispatch = useAppDispatch();

  return (
    <Card
      sx={{
        maxWidth: "600px",
        margin: "100px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardMedia
        component="img"
        alt={game.name}
        height="300px"
        image={game.imageUrl}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {game.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {game.description}
        </Typography>
        {/* <DiscountComponent
          salePrice={+product.salePrice}
          discountPercentage={product.discountPercentage}
        /> */}
        {/* <Typography variant="body2" color="text.secondary">
          {game.quantity > 0 ? "in stock" : "not in stock"}
        </Typography> */}
        <Button
          variant="contained"
          // onClick={() => {
          //   dispatch(addToCart(product));
          // }}
          // disabled={product.quantity < 1}
          sx={{
            width: "100%",
            marginTop: 2,
            backgroundColor: "#4CAF50",
            color: "#fff",
          }}
        >
          Add to Cart
          <AddShoppingCartIcon />
        </Button>
      </CardContent>
    </Card>
  );
};
export default ProductDetailsCard;
