import { render, screen } from "@testing-library/react";
import About from "./index";

describe("About Page", () => {
  it("should render about heading", () => {
    render(<About />);
    screen.getByRole("heading", { name: /About us/i });
  });
});
