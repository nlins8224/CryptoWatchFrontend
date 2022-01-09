import React, { useEffect, useState } from 'react';
import { getDatabase, onValue, ref } from 'firebase/database';
import IAsset from '../interfaces/Asset';
import {getAssets} from "./getAssets";
import {parseAssets} from "./parseAssets";
import {render} from "react-dom";

const db = getDatabase();
const liveCoinsRef = ref(db, '/live-coins');
export const useAssetStatusListener = () => {
    const [assetArray, setAssetArray] = useState<IAsset[]>([]);

    const setAssetStatusListener = (ref: any) => {
        onValue(ref, (snapshot) => {
            const data: Map<string, IAsset> = new Map(Object.entries(snapshot.val()));
            let assets: IAsset[] = getAssets(data);
            assets = parseAssets(assets);
            setAssetArray(assets);
        });
    };

    useEffect(() => {
        setAssetStatusListener(liveCoinsRef);
    }, [])

    return assetArray
}