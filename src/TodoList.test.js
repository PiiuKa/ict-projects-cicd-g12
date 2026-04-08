import { render, screen } from "@testing-library/react";
import { TodoList } from "./TodoList";

it("renders No task found when the list is empty", () => {
  render(<TodoList />);
  const linkElement = screen.getByText(/No task found/i);
  expect(linkElement).toBeInTheDocument();
});

it("adds task to todo list", () => {
  render(<TodoList list={["task"]} remove={() => {}} />);
  const taskItem = screen.getByText(/task/i);
  expect(taskItem).toBeInTheDocument();
});
