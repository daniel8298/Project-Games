import { useState } from "react";
import { HorizontalLine, StyledCard } from "../../global/styles/Card.styled";
import { Logo } from "../../global/styles/Header.styled";
import { Checkbox, Image } from "../styles/Exchange.styled";

export type Game = {
  name: string;
  id: string;
};

export type GamesProps = {
  games: Game[];
  handleGameDelete: (id: string) => void;
};

const CardAdmin = ({ games, handleGameDelete }: GamesProps) => {
  // const [games, setGames] = useState([
  //   { name: "Gta V", id: "1" },
  //   { name: "Call Of Duty", id: "2" },
  // ]);

  return (
    <StyledCard>
      <div>
        <Image
          src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg"
          alt="userAdmin"
        />
      </div>
      <h3>User Name: David</h3>
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
              <Checkbox type="checkbox" />
              {game.name}
            </label>
            {<br />}
          </div>
        ))}
      </div>
    </StyledCard>
  );
};

export default CardAdmin;
