import { UserProfile } from "../components/UserProfile";
import { screen, render } from "@testing-library/react";

describe("UserProfile - Rendering", () => {
  it("should have text => Email Verified when isEmailVerified is true", () => {
    render(
      <UserProfile
        displayName="Tunde Elesho"
        userName="gemtunde"
        email="gemtunde@gmail.com"
        isEmailVerified={true}
      />
    );
    expect(screen.getByText("Email Verified")).toBeInTheDocument();
    expect(screen.queryByText("Email Not Verified")).not.toBeInTheDocument();
  });
  it("should have text=> Email Not Verified when isEmailVerified is false", () => {
    render(
      <UserProfile
        displayName="Tunde Elesho"
        userName="gemtunde"
        email="gemtunde@gmail.com"
        isEmailVerified={false}
      />
    );
    expect(screen.queryByText("Email Verified")).not.toBeInTheDocument();
    expect(screen.getByText("Email Not Verified")).toBeInTheDocument();
  });
  it("should have display name with ... when character is greater than 15", () => {
    render(
      <UserProfile
        displayName="Tunde Elesho The Frontend Engineer"
        userName="gemtunde"
        email="gemtunde@gmail.com"
        isEmailVerified={false}
      />
    );
    const displayNameSpanElemnt = screen.getByText(/Display Name: /);
    expect(displayNameSpanElemnt).toHaveTextContent(/.*\.\.\./);
  });
  it("should have not display name with ... when character is less than 15", () => {
    render(
      <UserProfile
        displayName="Tunde Elesho"
        userName="gemtunde"
        email="gemtunde@gmail.com"
        isEmailVerified={false}
      />
    );
    const displayNameSpanElemnt = screen.getByText(/Display Name: /);
    expect(displayNameSpanElemnt).not.toHaveTextContent(/.*\.\.\./);
  });
});
