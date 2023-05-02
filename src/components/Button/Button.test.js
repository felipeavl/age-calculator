import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("renders the button without crashing", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders the provided text or child elements", () => {
    const buttonText = "Click me!";
    render(<Button>{buttonText}</Button>);
    const buttonElement = screen.getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  test("triggers onClick event when the button is clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me!</Button>);
    const buttonElement = screen.getByRole("button");

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
