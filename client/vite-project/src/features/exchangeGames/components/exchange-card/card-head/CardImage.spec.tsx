import { render, screen } from "@testing-library/react";
import CardImage from "./CardImage";

describe("CardImage", () => {
  const cardData = {
    url: "https://example.com/profile-image.jpg",
    userName: "John Doe",
    email: "john@example.com",
  };

  test("render email correctly", () => {
    render(<CardImage {...cardData} />);

    const emailElement = screen.getByText(/john@example.com/i);

    expect(emailElement).toBeInTheDocument();
  });
  test("render user name correctly", () => {
    render(<CardImage {...cardData} />);

    const nameElement = screen.getByText(/John Doe/i);

    expect(nameElement).toBeInTheDocument();
  });

  test("renders image with correct src and alt", () => {
    render(<CardImage {...cardData} />);

    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveAttribute(
      "src",
      "https://example.com/profile-image.jpg"
    );
    expect(imageElement).toBeInTheDocument();
  });

  test("renders image with alt text", () => {
    render(<CardImage {...cardData} />);

    const imageElement = screen.getByRole("img");

    expect(imageElement).toHaveAttribute("alt", "user");
  });
});
