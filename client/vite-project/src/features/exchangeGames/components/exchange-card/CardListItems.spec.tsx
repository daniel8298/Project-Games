import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardListItems from "./CardListItems";
import GameInterface from "../../../games/interfaces/GameInterface";

describe("CardListItems", () => {
  // Mock GameInterface
  const games: GameInterface[] = [
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
    {
      _id: "2",
      name: "Game 2",
      genre: "Adventure",
      platforms: "PC",
      description: "Epic adventure game",
      contactNumber: "987-654-3210",
      dateGame: "2024-02-15",
      imageUrl: "https://example.com/game2.jpg",
      imageAlt: "Game 2 Image",
      address: {
        areaCountry: "Country 2",
        city: "City 2",
        street: "Street 2",
      },
      userId: "user2",
      email: "user2@example.com",
    },
  ];

  // Mock handleGameDelete function
  const handleGameDeleteMock = vi.fn();

  test("renders CardListItems component with game list", () => {
    render(
      <CardListItems games={games} handleGameDelete={handleGameDeleteMock} />
    );

    // Expect the title to be present
    expect(screen.getByText("Games For Exchange")).toBeInTheDocument();

    // Expect each game to be rendered
    games.forEach((game) => {
      expect(screen.getByText(game.name)).toBeInTheDocument();
    });
  });

  test("calls handleGameDelete when delete button is clicked", () => {
    render(
      <CardListItems games={games} handleGameDelete={handleGameDeleteMock} />
    );

    // Click the delete button for the first game
    fireEvent.click(screen.getAllByAltText("delete")[0]);

    // Expect handleGameDeleteMock to be called with the correct game ID
    expect(handleGameDeleteMock).toHaveBeenCalledWith("1");
  });

  test("renders checkboxes for each game", () => {
    render(
      <CardListItems games={games} handleGameDelete={handleGameDeleteMock} />
    );

    // Expect a checkbox for each game
    games.forEach((game) => {
      const checkbox = screen.getByLabelText(game.name);
      expect(checkbox).toHaveAttribute("type", "checkbox");
    });
  });

  test("handles game deletion when checkbox is checked and delete button is clicked", () => {
    render(
      <CardListItems games={games} handleGameDelete={handleGameDeleteMock} />
    );

    // Check the checkbox for the first game
    fireEvent.click(screen.getByLabelText("Game 1"));

    // Click the delete button
    fireEvent.click(screen.getAllByAltText("delete")[0]);

    // Expect handleGameDeleteMock to be called with the correct game ID
    expect(handleGameDeleteMock).toHaveBeenCalledWith("1");
  });
});
