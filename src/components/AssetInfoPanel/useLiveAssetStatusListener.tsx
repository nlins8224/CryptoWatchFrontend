import {useEffect, useState} from "react";
import IAsset from "../../interfaces/Asset";
import {parseAssets} from "../parseAssets";
import {getDatabase, onValue, ref} from "@firebase/database";
import {useLocation} from "react-router-dom";

export const useLiveAssetStatusListener = () => {
    const [liveAsset, setLiveAsset] = useState<IAsset>();

    const location = useLocation()
    const symbol = location.pathname.split('/').pop()

    const db = getDatabase();
    const liveAssetRef = ref(db, `/live-coins/${symbol}`);

    const setAssetStatusListener = (ref: any) => {
        onValue(ref, (snapshot) => {
            let asset: IAsset[] = [snapshot.val()]
            asset = parseAssets(asset);
            setLiveAsset(asset[0])
        });
    };

    useEffect(() => {
        setAssetStatusListener(liveAssetRef)
    }, [])

    return liveAsset
}