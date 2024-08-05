import { useState } from 'react';
import ModalWindowStyle from './index.module.scss';

export const EditModalWindow = ({
    propsSetStateName,
    propsStateName,
    propsSetEditState,
}: {
    propsSetStateName: React.Dispatch<React.SetStateAction<string>>;
    propsStateName: string;
    propsSetEditState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [stateInput, setStateInput] = useState<string>('');
    const [stateError, setError] = useState<boolean>(false);
    function EditName() {
        if (stateInput.length != 0) {
            propsSetStateName(stateInput);
        } else {
            setError(true);
        }
    }
    return (
        <>
            <div
                onClick={() => {
                    propsSetEditState(false);
                }}
                className="backgroundModal"
            />
            <div className={ModalWindowStyle.wrapper}>
                <h2>Отредактировать строку {propsStateName}</h2>
                <input
                    onChange={(e) => {
                        setStateInput(e.target.value);
                    }}
                    content={propsStateName}
                    className={ModalWindowStyle.modalInput}
                    type="text"
                />
                {stateError && (
                    <span className={ModalWindowStyle.spanError}>
                        Строка не может быть безымянной
                    </span>
                )}
                <div className={ModalWindowStyle.buttonGroup}>
                    <button
                        onClick={() => {
                            EditName();
                            propsSetEditState(false);
                        }}
                        className={ModalWindowStyle.buttonOk}
                    >
                        Да
                    </button>
                    <button
                        onClick={() => {
                            propsSetEditState(false);
                        }}
                        className={ModalWindowStyle.buttonNo}
                    >
                        Нет
                    </button>
                </div>
            </div>
        </>
    );
};
