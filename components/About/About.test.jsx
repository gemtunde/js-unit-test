import { render, screen } from "@testing-library/react";
import About from "./index";
import { it } from "node:test";

describe("About Page", () => {
  it("should render about heading", () => {
    render(<About />);
    screen.getByRole("heading", { name: /About us/i });
  });
  it("should render acessibble search box", () => {
    render(<About />);
    const searchInput = screen.getByRole("searchbox");
    expect(searchInput).toHaveAccessibleName("Search");
  });
});
