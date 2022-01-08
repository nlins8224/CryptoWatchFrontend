import IAsset from "../../interfaces/Asset";

export const chartParser = (assets: IAsset[]) => {

    const parsedAssets = []

    for (const asset of assets) {
        const filteredAsset = (({ last_updated, price }) => ({ last_updated, price }))(asset);
        const parsedAsset = [parseInt(filteredAsset.last_updated), filteredAsset.price]
        parsedAssets.push(parsedAsset)
    }

    return parsedAssets
}
