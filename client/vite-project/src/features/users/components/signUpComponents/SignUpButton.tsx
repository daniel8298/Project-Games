import { Button } from "@mui/material";
import { FC, useEffect } from "react";
import { SignInUpButtonInterface } from "../../interfaces/SignInUpButtonInterface";
import { useNavigate } from "react-router-dom";
import { useAlerts } from "../../hooks/useAlerts";
import SignInUpAlert from "../alert/SignInUpAlert";
import { SignUpRequest } from "../../services/usersRequests";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import getAllGames from "../../../games/services/getAllGames";
const SignUpButton: FC<SignInUpButtonInterface> = ({
  text,
  isValid,
  watch,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { alert, handleAlertClose, showAlert } = useAlerts();
  const { error, user } = useAppSelector((store) => store.users);

  const handleSubmit = () => {
    const userSignUp = {
      email: watch("email"),
      password: watch("password"),
      isAdmin: false,
    };
    console.log("user input", userSignUp);
    dispatch(SignUpRequest(userSignUp));

    if (error) showAlert("error", "Sign up failed. Please try again.");
    else {
      showAlert("success", "Sign up successful! Redirecting to sign in...");

      setTimeout(() => {
        navigate("/store/signin");
      }, 5000);
    }
  };

  return (
    <>
      <Button
        type="submit"
        onClick={handleSubmit}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={!isValid}
      >
        {text}
      </Button>
      <SignInUpAlert alert={alert} handleAlertClose={handleAlertClose} />
    </>
  );
};

export default SignUpButton;
