import { useEffect, useState } from 'react';
import { Cell } from './cell';
import { StringTable } from './string';

interface propsI {
    propsStrings: number | undefined;
    propsColumns: number;
}
export const StringsTable = (props: propsI) => {
    let countStrings = 0;
    const propsStrings = props.propsStrings;
    const Columns = props.propsColumns;
    const massCount: number[] = [];
    const [stateCount, setStateCount] = useState<number[] | undefined>();
    for (let index = 0; index < Array(propsStrings).fill(0).length; index++) {
        massCount.push(index);
    }
    useEffect(() => {
        setStateCount(massCount);
    }, []);
    function addStirng() {
        if (stateCount) {
            const endI = stateCount.pop();
            const massNumb = [];
            if (endI) {
                massNumb.push(...stateCount, endI + 1);
            }
            setStateCount(massNumb);
        }
    }

    return (
        <>
            <tbody>
                {stateCount &&
                    stateCount.map((component) => {
                        return (
                            <StringTable
                                key={component}
                                propsComponent={component}
                                propsColumns={Columns}
                                propsSetStateCount={setStateCount}
                                propsStateCount={stateCount}
                            />
                        );
                    })}
                <tr>
                    <th className="thOrder">ЗаказN</th>
                    {Columns &&
                        Array(Columns + 1)
                            .fill(0)
                            .map(() => {
                                countStrings++;
                                return <Cell key={countStrings++} />;
                            })}
                </tr>
            </tbody>
            {stateCount && (
                <button
                    onClick={() => {
                        addStirng();
                    }}
                    className="addStringButton"
                >
                    Добавить строку +
                </button>
            )}
        </>
    );
};
