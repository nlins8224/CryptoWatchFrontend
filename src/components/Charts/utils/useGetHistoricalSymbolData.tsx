import { useEffect, useState } from 'react';
import IAsset from '../../../interfaces/Asset';
import { get, getDatabase, ref } from '@firebase/database';
import { getAssets } from '../../getAssets';

const db = getDatabase();
export const useGetHistoricalSymbolData = (
    path: string,
): { status: string; data: IAsset[] } => {
    const [status, setStatus] = useState<string>('IDLE');
    const [data, setData] = useState<IAsset[]>([]);

    const getData = async () => {
        const historicalRef = ref(db, path);

        const snapshot = await get(historicalRef);
        setStatus('LOADING');
        if (snapshot.exists()) {
            const data: Map<string, IAsset> = new Map(
                Object.entries(snapshot.val()),
            );
            const assets: IAsset[] = getAssets(data);
            setData(assets);
            setStatus('LOADED');
        } else {
            setStatus('NO DATA');
        }
    };

    useEffect(() => {
        (async () => {
            await getData();
        })();
    }, []);

    return { status, data };
};
