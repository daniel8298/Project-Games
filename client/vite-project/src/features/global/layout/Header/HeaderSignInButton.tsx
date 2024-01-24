import { useNavigate } from "react-router-dom";
import { Button } from "../../styles/components/Button.styled";

const HeaderSignInButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate("/signin");
      }}
    >
      Sign In
    </Button>
  );
};

export default HeaderSignInButton;
