import React, { useEffect, useState } from 'react';
import { onValue } from 'firebase/database';
import IAsset from '../interfaces/Asset';
import { getAssets } from '../components/getAssets';
import { parseAssets } from '../components/parseAssets';

export const useLiveAssetsEventListener = (ref: any) => {
    const [assetArray, setAssetArray] = useState<IAsset[]>([]);

    const setAssetEventListener = (ref: any) => {
        onValue(ref, (snapshot) => {
            const data: Map<string, IAsset> = new Map(
                Object.entries(snapshot.val()),
            );
            let assets: IAsset[] = getAssets(data);
            assets = parseAssets(assets);
            setAssetArray(assets);
        });
    };

    useEffect(() => {
        setAssetEventListener(ref);
    }, []);

    return assetArray;
};
