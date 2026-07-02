import { describe, it, expect } from "vitest";
import { render, screen, within, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BookingForm } from "@/components/demo/BookingForm";

describe("BookingForm", () => {
  it("offers 22 time slots from 7:00 AM to 5:30 PM", () => {
    render(<BookingForm />);
    const options = within(screen.getByLabelText("Reservation time")).getAllByRole("option");
    expect(options).toHaveLength(22);
    expect(options[0]).toHaveTextContent("7:00 AM");
    expect(options[21]).toHaveTextContent("5:30 PM");
  });

  it("offers party sizes 1–12 with correct pluralization", () => {
    render(<BookingForm />);
    const options = within(screen.getByLabelText("Party size")).getAllByRole("option");
    expect(options).toHaveLength(12);
    expect(options[0]).toHaveTextContent("1 guest");
    expect(options[1]).toHaveTextContent("2 guests");
  });

  it("defaults the date to tomorrow", async () => {
    render(<BookingForm />);
    const date = screen.getByLabelText("Reservation date") as HTMLInputElement;
    const t = new Date();
    t.setDate(t.getDate() + 1);
    const expected = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(
      t.getDate(),
    ).padStart(2, "0")}`;
    await waitFor(() => expect(date.value).toBe(expected));
  });

  it("confirms the request and greets by first name", async () => {
    const user = userEvent.setup();
    const { container } = render(<BookingForm />);
    await user.type(screen.getByLabelText("Your name"), "Jane Doe");
    fireEvent.submit(container.querySelector("form")!);
    expect(await screen.findByText(/Table requested, Jane!/)).toBeInTheDocument();
    expect(screen.getByText(/nothing was\s+actually booked/i)).toBeInTheDocument();
  });
});
