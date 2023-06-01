import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "..";

describe("Counter", () => {
  let initialCountElement;

  beforeEach(() => {
    render(<Counter />);
    initialCountElement = screen.getByText("Count: 0");
  });

  test("renders with initial count of 0", () => {
    expect(initialCountElement).toBeInTheDocument();
  });

  test("increments the count by 1 when `increase` button is clicked", () => {
    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);
    expect(initialCountElement).toHaveTextContent("Count: 1");
  });

  test("decrements the count by 1 when the `decrease` button is clicked", () => {
    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
    expect(initialCountElement).toHaveTextContent("Count: -1");
  });

  test("increments the count by 2 when the increment button is clicked twice", () => {
    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(initialCountElement).toHaveTextContent("Count: 2");
  });

  test("decrements the count by 2 when the decrement button is clicked twice", () => {
    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    expect(initialCountElement).toHaveTextContent("Count: -2");
  });
});
