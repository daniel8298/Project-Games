import { Routes, Route } from "react-router-dom";
// import HomePage from "../home/pages/HomePage";
// import StorePage from "../../maps/pages/StorePage";
import NotFoundPage from "../layout/NotFoundPage/NotFoundPage";
// import OrderDetails from "../../orderDetails/pages/OrderDetails";
// import SignIn from "../form/pages/Signin";
// import SignUp from "../form/pages/Signup";
// import DeliveryForm from "../form/pages/DeliveryForm";
// import SearchPage from "../categories/pages/SearchPage";
// import GameDetailsPage from "../../games/pages/GameDetailsPage";
// import GamesPage from "../../games/pages/GamesPage";
import SignInPage from "../../users/pages/SignInPage";
import SignUpPage from "../../users/pages/SignUpPage";
import SearchPage from "../../games/pages/SearchPage";
import ExchangeGamesPage from "../../exchangeGames/pages/ExchangeGamesPage";
import { ROUTS } from "./models/routes";
import GamesPage from "../../games/pages/GamesPage";
import GameDetailsPage from "../../games/pages/GameDetailsPage";
const RouterDom = () => {
  return (
    <Routes>
      <Route path={ROUTS.home} element={<GamesPage />} />
      <Route path={ROUTS.signin} element={<SignInPage />} />
      <Route path={ROUTS.signup} element={<SignUpPage />} />
      <Route path={ROUTS.search} element={<SearchPage />} />
      <Route path={ROUTS.exchangeGames} element={<ExchangeGamesPage />} />
      <Route path={ROUTS.gameDetails} element={<GameDetailsPage />} />
      {/* <Route path="/store/home/games" element={<GamesPage />} /> */}
      {/* <Route path="/store/home/store/map" element={<StorePage />} /> */}
      {/* <Route path="/store/order-details/:userId" element={<OrderDetails />} /> */}
      {/* <Route path="/store/delivery" element={<DeliveryForm />} /> */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default RouterDom;
