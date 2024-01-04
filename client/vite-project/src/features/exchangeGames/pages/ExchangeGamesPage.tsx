import { useState } from "react";
import { Button } from "../../global/styles/Button.styled";
import { ContainerWithFlex } from "../../global/styles/Container.styled";
import { Flex } from "../../global/styles/Flex.styled";
import { Logo } from "../../global/styles/Header.styled";
import CardAdmin from "../components/CardAdmin";
import CardUser from "../components/CardUser";
import { FlexSelectAndButton, Select } from "../styles/Exchange.styled";

const ExchangeGamesPage = () => {
  const [gamesAdmin, setGamesAdmin] = useState([
    { name: "Gta V", id: "1" },
    { name: "Call Of Duty", id: "2" },
  ]);
  const [gamesUser, setGamesUser] = useState([
    { name: "Mario", id: "1" },
    { name: "Tomb Raider", id: "2" },
  ]);

  const [selectedGame, setSelectedGame] = useState("");

  const handleGameDeleteAdmin = (id: string) => {
    const updatedGames = gamesAdmin.filter((game) => game.id !== id);
    setGamesAdmin(updatedGames);
  };
  const handleGameDeleteUser = (id: string) => {
    const updatedGames = gamesUser.filter((game) => game.id !== id);
    setGamesUser(updatedGames);
  };

  const handleAddGameAdmin = () => {
    if (selectedGame) {
      const newGame = { name: selectedGame, id: Date.now().toString() }; // יצירת משחק חדש על פי הבחירה מה-Select
      setGamesAdmin([...gamesAdmin, newGame]); // הוספת המשחק לרשימה של מנהל המשחקים
      setSelectedGame(""); // איפוס הבחירה לאחר הוספת המשחק
    }
  };
  const handleAddGameUser = () => {
    if (selectedGame) {
      const newGame = { name: selectedGame, id: Date.now().toString() }; // יצירת משחק חדש על פי הבחירה מה-Select
      setGamesUser([...gamesUser, newGame]); // הוספת המשחק לרשימה של מנהל המשחקים
      setSelectedGame(""); // איפוס הבחירה לאחר הוספת המשחק
    }
  };

  const renderGameOptions = (games) => {
    return games.map((game) => (
      <option key={game.id} value={game.name}>
        {game.name}
      </option>
    ));
  };
  return (
    <ContainerWithFlex>
      <h1>
        Choice{"  "}
        <Logo
          src="../../../../../public/icons8-exchange.png"
          alt="delete"
          width={"25px"}
        />
        {"  "}
        Games
      </h1>

      <Flex>
        <FlexSelectAndButton>
          <Select
            onChange={(e) => setSelectedGame(e.target.value)}
            value={selectedGame}
          >
            <option value="">Select a game</option>
            {renderGameOptions(gamesAdmin)}
          </Select>
          <Button bg="black" color="white" onClick={handleAddGameAdmin}>
            Add Game
          </Button>
        </FlexSelectAndButton>
        <CardAdmin
          games={gamesAdmin}
          handleGameDelete={handleGameDeleteAdmin}
        />
        <CardUser games={gamesUser} handleGameDelete={handleGameDeleteUser} />
        <FlexSelectAndButton>
          <Select
            onChange={(e) => setSelectedGame(e.target.value)}
            value={selectedGame}
          >
            <option value="">Select a game</option>
            {renderGameOptions(gamesUser)}
          </Select>
          <Button bg="black" color="white" onClick={handleAddGameUser}>
            Add Game
          </Button>
        </FlexSelectAndButton>
      </Flex>
      <Button>Submit</Button>
    </ContainerWithFlex>
  );
};

export default ExchangeGamesPage;
