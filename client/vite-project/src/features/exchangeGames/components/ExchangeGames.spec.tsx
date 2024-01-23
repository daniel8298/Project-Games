import { render, screen } from "@testing-library/react";
import ExchangeGamesPage from "./ExchangeGames";
import GameInterface from "../../games/interfaces/GameInterface";

describe("ExchangeGames", () => {
  test("renders page title correctly", () => {
    render(<ExchangeGamesPage userGames={[]} userSwapGames={[]} />);

    const titleElement = screen.getByText(/Choice\s*Games/i);

    expect(titleElement).toBeInTheDocument();
  });

  test("renders page subtitle correctly", () => {
    render(<ExchangeGamesPage userGames={[]} userSwapGames={[]} />);

    const subtitleElement = screen.getByText(
      /Welcome To The Game Exchange Page/i
    );

    expect(subtitleElement).toBeInTheDocument();
  });

  test("renders CardUser component for userSwap correctly", () => {
    const userSwapGames: GameInterface[] = [
      {
        _id: "1",
        name: "Game 1",
        genre: "Action",
        platforms: "PS5",
        description: "Exciting action game",
        contactNumber: "123-456-7890",
        dateGame: "2024-02-01",
        imageUrl: "https://example.com/game1.jpg",
        imageAlt: "Game 1 Image",
        address: {
          areaCountry: "Country 1",
          city: "City 1",
          street: "Street 1",
        },
        userId: "user1",
        email: "user1@example.com",
      },
    ];

    render(<ExchangeGamesPage userGames={[]} userSwapGames={userSwapGames} />);

    const cardUserElement = screen.getByText(/UserSwap/i);

    expect(cardUserElement).toBeInTheDocument();
  });

  test("renders Submit button and it's not disabled", () => {
    render(<ExchangeGamesPage userGames={[]} userSwapGames={[]} />);

    const submitButton = screen.getByText(/Submit/i);

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("disabled");
  });
});
