import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FC } from "react";
// import { useAppDispatch } from "../../../store/hooks";
// import { addToCart } from "../../cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { CardActionsButtonStyle, cardStyle } from "../helpers/cardStyles";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import DiscountComponent from "../../cart/utils/DiscountComponent";
import GameInterface from "../interfaces/GameInterface";

type GamesProps = {
  game: GameInterface;
};
export const GameCard: FC<GamesProps> = ({ game }) => {
  const navigate = useNavigate();

  return (
    <Card sx={cardStyle}>
      <Card
        onClick={() => {
          navigate(`/${game._id}`);
        }}
        sx={{ height: "350px", position: "relative" }}
      >
        <CardMedia
          component="img"
          alt={game.imageAlt}
          height="180px"
          width="240px"
          image={game.imageUrl}
          sx={{ objectFit: "cover" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {game.name}
          </Typography>
          {/* <DiscountComponent
            salePrice={+product.salePrice}
            discountPercentage={product.discountPercentage}
          /> */}
          {/* <Typography variant="body2" color="text.secondary">
            {game.description}
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            {game.platforms}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {game.dateGame.slice(0, 10)}
          </Typography>
        </CardContent>
      </Card>
      {/* <CardActions sx={{ justifyContent: "space-evenly", padding: 0 }}>
        <Button
          size="small"
          sx={CardActionsButtonStyle}
          // onClick={() => dispatch(addToCart(product))}
          variant="contained"
          // disabled={game.quantity < 1}
        >
          Edit To Card
          <AddShoppingCartIcon />
        </Button>
      </CardActions> */}
    </Card>
  );
};
