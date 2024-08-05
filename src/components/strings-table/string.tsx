import { useState } from 'react';
import { DeleteModalWindow } from '../modal-window/delete-window';
import { EditModalWindow } from '../modal-window/edit-window';
import { Cell } from './cell';

interface propsI {
    propsComponent: number;
    propsColumns: number;
    propsSetStateCount: React.Dispatch<
        React.SetStateAction<number[] | undefined>
    >;
    propsStateCount: number[];
}

export const StringTable = (props: propsI) => {
    const [modalState, setModalState] = useState<boolean>(false);
    const [editState, setEditState] = useState<boolean>(false);
    const [stateName, setStateName] = useState<string>(
        `${props.propsComponent}`,
    );
    let countCell = 100;
    const Columns = props.propsColumns;
    return (
        <>
            <tr>
                <th className="thOrder">
                    {stateName}
                    <div className="buttonsString">
                        <span
                            onClick={() => {
                                setEditState(true);
                            }}
                            className="editButton"
                        >
                            отредактировать
                        </span>
                        <span
                            onClick={() => {
                                setModalState(true);
                            }}
                            className="deleteButton"
                        >
                            удалить
                        </span>
                    </div>
                    {modalState && (
                        <DeleteModalWindow
                            propsState={props.propsComponent}
                            propsStateStrings={props.propsStateCount}
                            propsDeleteSetStateCount={props.propsSetStateCount}
                            propsSetModalState={setModalState}
                        />
                    )}
                    {editState && (
                        <EditModalWindow
                            propsSetStateName={setStateName}
                            propsStateName={stateName}
                            propsSetEditState={setEditState}
                        />
                    )}
                </th>
                {Columns &&
                    Array(Columns + 1)
                        .fill(0)
                        .map(() => {
                            return <Cell key={countCell++} />;
                        })}
            </tr>
        </>
    );
};
