import { get, getDatabase, ref } from '@firebase/database';
import { auth } from '../../firebase/firebase';
import { useEffect, useState } from 'react';

export const useWatchlistData = () => {
    const [status, setStatus] = useState<string>('IDLE');
    const [data, setData] = useState<string[]>([]);

    if (!auth || !auth.currentUser) return;

    const db = getDatabase();
    const path = `/users/${auth.currentUser.uid}`;

    const getData = async () => {
        const userRef = ref(db, path);

        const snapshot = await get(userRef);
        setStatus('LOADING');
        if (snapshot.exists()) {
            const snapshotData = snapshot.val();
            const symbols = parseSymbols(snapshotData);
            setData(symbols);
        }
    };

    const parseSymbols = (symbolsData: any) => {
        const symbols: string[] = [];
        Object.entries(symbolsData).forEach((key) => symbols.push(key[0]));
        return symbols;
    };

    useEffect(() => {
        (async () => {
            await getData();
        })();
    }, []);

    return { status, data };
};
