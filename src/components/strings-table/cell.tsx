import { useState } from 'react';

export const Cell = () => {
    let countColumns = 0;
    const [stateCell, setStateCell] = useState<boolean>(false);
    countColumns++;
    const randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 1) {
        setStateCell(!stateCell);
    }

    return (
        <>
            {stateCell ? (
                <td
                    className="tdTrue custom-cursor-on-hover"
                    key={countColumns}
                    onClick={() => setStateCell(!stateCell)}
                ></td>
            ) : (
                <td
                    className="tdFalse custom-cursor-on-hover"
                    key={countColumns}
                    onClick={() => setStateCell(!stateCell)}
                ></td>
            )}
        </>
    );
};
