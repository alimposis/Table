import ModalWindowStyle from './index.module.scss';

export const DeleteModalWindow = ({
    propsState,
    propsDeleteSetStateCount,
    propsStateStrings,
    propsSetModalState,
}: {
    propsState: number;
    propsDeleteSetStateCount: React.Dispatch<
        React.SetStateAction<number[] | undefined>
    >;
    propsStateStrings: number[];
    propsSetModalState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <>
            <div
                onClick={() => {
                    propsSetModalState(false);
                }}
                className="backgroundModal"
            />
            <div className={ModalWindowStyle.wrapper}>
                <h2>Вы точно хотите удалить строку {propsState}?</h2>
                <div className={ModalWindowStyle.buttonGroup}>
                    <button
                        onClick={() => {
                            propsDeleteSetStateCount(
                                propsStateStrings.filter((el) => {
                                    {
                                        return el != propsState;
                                    }
                                }),
                            );
                        }}
                        className={ModalWindowStyle.buttonOk}
                    >
                        Да
                    </button>
                    <button
                        onClick={() => propsSetModalState(false)}
                        className={ModalWindowStyle.buttonNo}
                    >
                        Нет
                    </button>
                </div>
            </div>
        </>
    );
};
