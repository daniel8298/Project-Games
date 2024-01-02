import { useNavigate } from "react-router-dom";
import { removeToken } from "../../../users/services/localStorageService";
import { setDecodedToken } from "../../token/tokenSlice";
import { useAppDispatch } from "../../../../store/hooks";
import { Button } from "../../styles/Button.styled";

const HeaderLogOutButton = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <Button
      onClick={() => {
        navigate("/store/home");
        removeToken();
        dispatch(setDecodedToken(null));
      }}
    >
      Logout
    </Button>
  );
};

export default HeaderLogOutButton;
