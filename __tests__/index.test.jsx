import HomePage from "../components/HomePage";
import { render, screen } from "@testing-library/react";

describe("Home Page - Rendering", () => {
  it("should have Home Page text", () => {
    render(<HomePage />);
    expect(screen.getByText("Home Now")).toBeInTheDocument();
  });
  it("it should have the button with text Click me", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("button", { name: "Click Me" })
    ).toBeInTheDocument();
  });
  it("it should have input field with label text Enter Random text", () => {
    render(<HomePage />);
    // not the best for input fields
    // cannot work with multiple input fields
    // expect(screen.getByRole("textbox")).toBeInTheDocument();

    // this has label text which is better for input fields coz it increases accessibility
    render(<HomePage />);
    screen.getByLabelText(/Enter Random text/);
  });
  it("it should have input field with label text Enter Specific text", () => {
    render(<HomePage />);
    // not the best for input fields
    // cannot work with multiple input fields
    // expect(screen.getByRole("textbox")).toBeInTheDocument();

    // this has label text which is better for input fields coz it increases accessibility
    render(<HomePage />);
    expect(screen.getByLabelText(/Enter Specific text/)).toBeInTheDocument();
  });
  it("it should find input field by placeholder text Search", () => {
    render(<HomePage />);
    expect(screen.getByPlaceholderText(/Search/)).toBeInTheDocument();
  });
  it("it should find input field by display value", () => {
    render(<HomePage />);
    expect(screen.getByDisplayValue(/Camry/)).toBeInTheDocument();
  });
});
