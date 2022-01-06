import IAsset from "../interfaces/Asset";

export const getAssets = (assetMap: Map<string, IAsset> | undefined): IAsset[] => {
    const assets: IAsset[] = [];
    assetMap?.forEach((value: IAsset) => assets.push(value));
    return assets;
};