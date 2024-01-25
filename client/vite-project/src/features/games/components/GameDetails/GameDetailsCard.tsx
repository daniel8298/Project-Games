import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import { useAppDispatch } from "../../../../store/hooks";
// import { addToCart } from "../../../cart/cartSlice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import GameInterface from "../../interfaces/GameInterface";
import { Box, Container, CssBaseline } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../store/hooks";
import { ContainerWithFlex } from "../../../global/styles/components/Flex.styled";
import { CardStyle } from "../../../global/styles/components/Card.styled";
import {
  ImageCard,
  ImageContainer,
} from "../../../exchangeGames/styles/Exchange.styled";
import { P, TitleH4 } from "../../../global/styles/components/Title";
import { Button } from "../../../global/styles/components/Button.styled";
import { gameUserSwap } from "../../../exchangeGames/exchangeGamesSlice";
interface GameCardProps {
  game: GameInterface;
}
const GameDetailsCard: React.FC<GameCardProps> = ({ game }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <CardStyle>
      <ImageContainer>
        <ImageCard alt={game.imageAlt} src={game.imageUrl}></ImageCard>
      </ImageContainer>

      <ContainerWithFlex padding="15px">
        <TitleH4>{game.name}</TitleH4>
        <P>{game.genre}</P>
        <P>{game.platforms}</P>
        <P>{game.description}</P>
        <P>{game.contactNumber}</P>
      </ContainerWithFlex>
      <ContainerWithFlex padding="10px" display="flex" justifycontent="center">
        <Button
          onClick={() => {
            dispatch(gameUserSwap(game));
            navigate("/exchangeGamesPage");
          }}
        >
          {" "}
          Swap With User
        </Button>
      </ContainerWithFlex>
    </CardStyle>

    // <Box>
    //   <CssBaseline />
    //   <Card
    //     sx={{
    //       maxWidth: "600px",
    //       margin: "100px",
    //       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    //     }}
    //   >
    //     <CardMedia
    //       component="img"
    //       alt={game.imageAlt}
    //       height="300px"
    //       image={game.imageUrl}
    //       sx={{ objectFit: "cover" }}
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         {game.name}
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         {game.genre}
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         {game.platforms}
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         {game.description}
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         {game.contactNumber}
    //       </Typography>

    //       {/* <DiscountComponent
    //       salePrice={+product.salePrice}
    //       discountPercentage={product.discountPercentage}
    //     /> */}
    //       {/* <Typography variant="body2" color="text.secondary">
    //       {game.quantity > 0 ? "in stock" : "not in stock"}
    //     </Typography> */}
    //       <Button
    //         variant="contained"
    //         onClick={() => {
    //           dispatch(gamesUserSwapId(game.userId));
    //           navigate("/exchangeGamesPage");
    //         }}
    //         // onClick={() => {
    //         //   dispatch(addToCart(product));
    //         // }}
    //         // disabled={product.quantity < 1}
    //         sx={{
    //           width: "100%",
    //           marginTop: 2,
    //           backgroundColor: "#4CAF50",
    //           color: "#fff",
    //         }}
    //       >
    //         Add to Cart
    //         <AddShoppingCartIcon />
    //       </Button>
    //     </CardContent>
    //   </Card>
    // </Box>
  );
};
export default GameDetailsCard;
