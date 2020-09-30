import React from 'react';
import { render } from '@testing-library/react';
import MissionsList from './MissionsList';

export const missionsFixture = [
    {
        mission_id: 'bogusid',
        mission_name: 'my bogus mission'
    }
];

test("MissionsList renders", () => {
    render(<MissionsList missions={[]} />)
});

test("MissionsList shows data when rerendered with new missions props", () => {
    const { queryAllByTestId, rerender } = render(<MissionsList missions={[]}/>);

    expect(queryAllByTestId("mission")).toStrictEqual([]);
    expect(queryAllByTestId("mission")).toHaveLength(0);

    rerender(<MissionsList missions={missionsFixture}/>);

    expect(queryAllByTestId("mission")).toHaveLength(1);
});

test("MissionsList renders an error when error is indicated", () => {
    
    const errorText = "my error";
    const { getByTestId } = render(<MissionsList error={errorText}/>);

    
    expect(getByTestId("missions-error").innerHTML).toBe(errorText);
});