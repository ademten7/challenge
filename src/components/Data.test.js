import { render, screen } from "@testing-library/react";
import Data from "./Data";

describe("Data component", () => {
  test("Renders the Data component without crashing", () => {
    render(<Data />);
    expect(screen.getByTestId("first-header")).toBeInTheDocument();

    const titleElement = screen.getByTitle("challenge");
    expect(titleElement).toBeInTheDocument();
  });
});
