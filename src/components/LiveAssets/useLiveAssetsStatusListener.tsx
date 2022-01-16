import React, { useEffect, useState } from 'react';
import { onValue } from 'firebase/database';
import IAsset from '../../interfaces/Asset';
import { getAssets } from '../getAssets';
import { parseAssets } from '../parseAssets';

export const useLiveAssetsStatusListener = (ref: any) => {
    const [assetArray, setAssetArray] = useState<IAsset[]>([]);

    const setAssetStatusListener = (ref: any) => {
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
        setAssetStatusListener(ref);
    }, []);

    return assetArray;
};
