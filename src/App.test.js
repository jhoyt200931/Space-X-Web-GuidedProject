import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';

import { fetchMissions as mockFetchMissions } from './api/fetchMissions';
import App from './App';
import { missionsFixture } from './components/MissionsList.test'

jest.mock("./api/fetchMissions");

test("App renders", () => {
    render(<App />);
});

test("App fetches missions data and renders the data", async () => {
    mockFetchMissions.mockResolvedValueOnce({ data: missionsFixture});

    const { getByText, queryAllByTestId } = render(<App />);
    const button = getByText(/get data/i);

    fireEvent.click(button);

    getByText(/we are fetching data/i);

    await wait();
    expect(queryAllByTestId("mission")).toHaveLength(1);
});