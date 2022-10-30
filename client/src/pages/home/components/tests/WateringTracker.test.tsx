/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { WateringTracker } from "../WateringTracker";
import { CurrentUserContext } from "../../../../general/contexts/CurrenUserProvider";
import { User } from "../../../../domain/User";

let currentUser: User | null = null;

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

beforeEach(() => {
  currentUser = {
    userName: "Always Water",
    email: "never@water.com",
    lastWateringDay: "2022-10-11",
    favoriteVegetables: [],
    vegetables: []
  };
});

describe("WateringTracker", () => {
  it("should display the current date", () => {
    // arrange
    renderWateringTracker();

    // act
    const currentDate = screen.getByText(new Date().toLocaleDateString("en-CA"));

    // assert
    expect(currentDate).toBeInTheDocument();
  });

  it("should display the last time watered", () => {
    renderWateringTracker();

    const lastTimeWatered = screen.getByText(currentUser!.lastWateringDay);

    expect(lastTimeWatered).toBeInTheDocument();
  });

  describe("when garden was watered today", () => {
    it("should display garden was watered today", () => {
      renderWateringTracker(new Date(Date.parse("2022-10-11T00:00:00-04:00")));

      const label = screen.getByText("Garden was watered today!");
  
      expect(label).toBeInTheDocument();
    });
  });

  describe("when garden was watered yesterday", () => {
    it("should display days since last time watered", () => {
      renderWateringTracker(new Date(Date.parse("2022-10-12T00:00:00-04:00")));

      const label = screen.getByText("1 day(s) since last time garden was watered. Garden should be watered in 2 day(s)!");
  
      expect(label).toBeInTheDocument();
    });
  });

  describe("when garden was watered 3 days ago", () => {
    it("should display garden needs to be watered", () => {
      renderWateringTracker(new Date(Date.parse("2022-10-14T00:00:00-04:00")));

      const lastTimeLabel = screen.getByText("3 day(s) since last time garden was watered.");
      const needWateringLabel = screen.getByText("Garden needs to be watered!");
  
      expect(lastTimeLabel).toBeInTheDocument();
      expect(needWateringLabel).toBeInTheDocument();
    });
  });
});

function renderWateringTracker(date: Date = new Date()) {
  jest.setSystemTime(date);
  render(
    <CurrentUserContext.Provider value={{
      currentUser,
      persistCurrentUser: () => undefined,
      fetchCurrentUser: () => undefined,
      email: currentUser!.email
    }}>
      <WateringTracker />
    </CurrentUserContext.Provider>
  );
}
