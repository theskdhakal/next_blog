import { Provider } from "react-redux";
import { store } from "../store";
import Register from "../app/register/page";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { userInput } from "../component/InputField";
import "@testing-library/jest-dom";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Register Page", () => {
  it("renders the form inputs correctly", () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>
    );

    const inputElements = screen.getAllByRole("textbox");
    expect(inputElements.length).toBe(userInput.length);

    userInput.forEach((item) => {
      expect(screen.getByPlaceholderText(item.placeholder)).toBeInTheDocument();
    });
  });

  it("submits the form data", async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    render(
      <Provider store={store}>
        <Register />
      </Provider>
    );

    // Fill out the form
    userInput.forEach((item) => {
      const inputElement = screen.getByPlaceholderText(item.placeholder);
      fireEvent.change(inputElement, { target: { value: "test" } });
    });

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    // Check if the form submission was handled
    expect(mockPush).toHaveBeenCalledWith("/");
  });
});
