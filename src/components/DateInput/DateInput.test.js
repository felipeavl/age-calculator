import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import DateInput from "./DateInput";

describe("DateInput", () => {
  it("renders the label and input field", () => {
    render(<DateInput label="Day" />);
    expect(screen.getByLabelText(/Day/i)).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("displays an error message when passed", () => {
    render(<DateInput label="Day" errors="Invalid day" />);
    expect(screen.getByText(/Invalid day/i)).toBeInTheDocument();
  });

  it("updates the input value when typed", () => {
    render(<DateInput label="Day" />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "15" } });
    expect(input.value).toBe("15");
  });

  it("sets input to invalid state when passed an error", () => {
    render(<DateInput label="Day" errors="Invalid day" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("sets input to valid state when there are no errors", () => {
    render(<DateInput label="Day" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("aria-invalid", "false");
  });
});
