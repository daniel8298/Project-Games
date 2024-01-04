import { useState } from "react";
import { HorizontalLine, StyledCard } from "../../global/styles/Card.styled";
import { Logo } from "../../global/styles/Header.styled";
import { Checkbox, Image } from "../styles/Exchange.styled";
import { GamesProps } from "./CardAdmin";

const CardUser = ({ games, handleGameDelete }: GamesProps) => {
  // const handleGameDelete = (id: string) => {
  //   const updatedGames = games.filter((game) => game.id !== id);
  //   setGames(updatedGames);
  // };
  return (
    <StyledCard>
      <Image
        src="https://www.svgrepo.com/show/382101/male-avatar-boy-face-man-user.svg"
        alt="user"
      />
      <h3>Me: Daniel</h3>
      <HorizontalLine />
      <div>
        <h4>Games For Exchange</h4>
        {games.map((game) => (
          <div key={game.id}>
            <label>
              <Logo
                src="../../../../../public/delete-svgrepo-com.svg"
                alt="delete"
                width={"25px"}
                onClick={() => handleGameDelete(game.id)}
              />
              <Checkbox type="checkbox" checked={game.checked} />
              {game.name}
            </label>
            {<br />}
          </div>
        ))}
      </div>
    </StyledCard>
  );
};

export default CardUser;
