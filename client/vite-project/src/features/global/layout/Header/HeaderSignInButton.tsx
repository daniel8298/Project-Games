import { useNavigate } from "react-router-dom";
import { Button } from "../../styles/components/Button.styled";

const HeaderSignInButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate("/store/signin");
      }}
    >
      Sign In
    </Button>
  );
};

export default HeaderSignInButton;
