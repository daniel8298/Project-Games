import { useState, useEffect } from "react";
import { ContainerWithFlex } from "../styles/components/Flex.styled";
import { FooterStyled } from "../styles/components/Footer.styled";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getFormattedTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  return (
    <FooterStyled>
      <ContainerWithFlex display="flex" justifyContent="center">
        Games Exchange © {new Date().getFullYear()} Local Time: {currentTime}
      </ContainerWithFlex>
    </FooterStyled>
  );
};

export default Footer;
