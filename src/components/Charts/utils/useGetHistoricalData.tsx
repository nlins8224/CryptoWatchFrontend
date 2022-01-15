import { useEffect, useState } from 'react';
import { getDatabase, ref } from '@firebase/database';
import {onValue} from "firebase/database";

const db = getDatabase();
export const useGetHistoricalData = (
    path: string,
): { status: string; data: any } => {
    const [status, setStatus] = useState<string>('IDLE');
    const [data, setData] = useState<Map<string, any>>();

    const getData = async () => {
        const historicalRef = ref(db, path);

        const setHistoricalDataListener = (ref: any) => {
            onValue(ref, (snapshot) => {
                setStatus('LOADING');
                if (snapshot.exists()) {
                    const data: Map<string, any> = new Map(
                        Object.entries(snapshot.val()),
                    );
                    data.forEach((value, key) => {
                        data.set(key, Object.values(value))
                    })

                    setData(data);
                    setStatus('LOADED');
                } else {
                    setStatus('NO DATA');
                }
            },{
                onlyOnce: true
            })
        }
        setHistoricalDataListener(historicalRef)
    };

    useEffect(() => {
        (async () => {
            await getData();
        })();
    }, []);

    return { status, data };
};
