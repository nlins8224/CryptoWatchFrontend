import IAsset from "../interfaces/Asset";

export const parseAssets = (assetArray: IAsset[]): IAsset[] => {
    const assets = assetArray
    assets.forEach(obj => obj.price_change_percentage = Number(obj.price_change_percentage.toFixed(4)));
    assets.forEach(obj => obj.price_change = Number(obj.price_change.toFixed(4)));
    assets.forEach(obj => obj.price = Number(obj.price.toFixed(4)));

    return assets
};