import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "..";

describe("Todo", () => {
  let inputElement, buttonElement;

  beforeEach(() => {
    render(<Todo />);

    inputElement = screen.getByPlaceholderText("Task Description...");
    buttonElement = screen.getByText("Add Task");
  });

  test("should render the submitted task", () => {
    fireEvent.change(inputElement, { target: { value: "Hello world" } });
    fireEvent.click(buttonElement);

    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  test("should edit a specific task", () => {
    fireEvent.change(inputElement, { target: { value: "Task 1" } });
    fireEvent.click(buttonElement);

    const deleteButton = screen.getByText("Delete");

    fireEvent.click(deleteButton);

    expect(screen.queryByText("Task 1")).toBeNull();
  });

  test("edit the certain todo from todos", () => {
    fireEvent.change(inputElement, { target: { value: "Task to be Edited" } });
    fireEvent.click(buttonElement);

    expect(screen.getByText("Task to be Edited")).toBeInTheDocument();
    expect(inputElement.value).toBe("");

    const editButton = screen.getByText("Edit");

    fireEvent.click(editButton);

    expect(inputElement.value).toBe("Task to be Edited");
    fireEvent.change(inputElement, { target: { value: "Edited Task" } });
    fireEvent.click(screen.getByText("Submit Edit"));

    expect(screen.getByText("Edited Task")).toBeInTheDocument();
  });
});
