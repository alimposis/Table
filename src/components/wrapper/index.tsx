import { ColumnsTable } from '../сolumns-table';
import { StringsTable } from '../strings-table';
import './index.module.scss';
import { useEffect, useState } from 'react';
import LoadingGIf from '../../../public/gif/loading.gif';
export const Wrapper = () => {
    const [addString, setAddString] = useState<boolean>(false);
    const [columns, setColumns] = useState<number>();
    const [strings, setStrings] = useState<number>();
    function сreatingСolumns() {
        return new Promise<number>((r) => {
            setTimeout(() => r(Math.floor(Math.random() * 98) + 2), 1500);
        });
    }
    function addStringFunction() {
        if (strings) {
            setStrings(strings + 1);
            setAddString(!addString);
        }
    }
    if (addString === true && strings != 100) {
        addStringFunction();
    }
    function сreatingString() {
        return new Promise<number>((r) => {
            setTimeout(() => r(Math.floor(Math.random() * 98) + 2), 1500);
        });
    }

    useEffect(() => {
        async function сreatingСolumnsString() {
            const columns = await сreatingСolumns();
            const strings = await сreatingString();
            setColumns(columns);
            setStrings(strings);
        }
        сreatingСolumnsString();
    }, []);

    return (
        <>
            {columns && strings ? (
                <>
                    <table>
                        <thead>
                            <ColumnsTable propsColumns={columns} />
                        </thead>
                        <StringsTable
                            propsColumns={columns}
                            propsStrings={strings}
                        />
                    </table>
                </>
            ) : (
                <img src={LoadingGIf} alt="" />
            )}
        </>
    );
};
