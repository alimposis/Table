import ColumnsTableStyle from './index.module.scss';

export const ColumnsTable = ({
    propsColumns,
}: {
    propsColumns: React.ReactNode;
}) => {
    let count = 0;
    return (
        <>
            <tr>
                <td className={ColumnsTableStyle.emptyTd}></td>
                {propsColumns &&
                    Array(propsColumns)
                        .fill(0)
                        .map(() => {
                            count++;
                            return (
                                <th
                                    className={ColumnsTableStyle.thColumn}
                                    key={count}
                                >
                                    Обработка{count}
                                </th>
                            );
                        })}
                <th className={ColumnsTableStyle.thColumn}>ОбработкаN</th>
            </tr>
        </>
    );
};
