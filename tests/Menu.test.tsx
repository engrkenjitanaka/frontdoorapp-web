import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Menu } from "@/components/demo/Menu";

describe("Menu", () => {
  it("lists items with prices", () => {
    render(<Menu />);
    expect(screen.getByRole("button", { name: /Sourdough Boule/ })).toBeInTheDocument();
    expect(screen.getByText("$8.00")).toBeInTheDocument();
  });

  it("opens a detail dialog with an order button", async () => {
    const user = userEvent.setup();
    render(<Menu />);
    await user.click(screen.getByRole("button", { name: /Almond Croissant/ }));

    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByText(/Soaked in vanilla syrup/i)).toBeInTheDocument();
    expect(
      within(dialog).getByRole("button", { name: /Order Almond Croissant/ }),
    ).toBeInTheDocument();
  });

  it("shows a demo order confirmation, then closes on Done", async () => {
    const user = userEvent.setup();
    render(<Menu />);
    await user.click(screen.getByRole("button", { name: /Butter Croissant/ }));
    await user.click(screen.getByRole("button", { name: /Order Butter Croissant/ }));

    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByText("Order placed!")).toBeInTheDocument();
    expect(within(dialog).getByText(/nothing[\s\S]*was actually ordered/i)).toBeInTheDocument();

    await user.click(within(dialog).getByRole("button", { name: /^Done$/ }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
