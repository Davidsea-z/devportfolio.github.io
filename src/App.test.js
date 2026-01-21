import React from "react";
import { act, render, screen } from "@testing-library/react";

// Avoid loading lottie/canvas during tests (jsdom doesn't implement canvas APIs).
jest.mock("./components/Loader", () => {
  return function MockLoader() {
    return <div data-testid="loader" />;
  };
});

// Avoid initializing tsparticles (it can log asynchronously after tests finish).
jest.mock("./components/Particle", () => {
  return function MockParticle() {
    return null;
  };
});

import App from "./App";

test("renders navbar after initial loader", () => {
  jest.useFakeTimers();

  render(<App />);

  // App shows a 2s loader before rendering the routed app.
  act(() => {
    jest.advanceTimersByTime(2000);
  });

  expect(screen.getByText(/David W\./i)).toBeInTheDocument();

  jest.useRealTimers();
});
