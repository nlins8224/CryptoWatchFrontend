import IAsset from '../../interfaces/Asset';

export const chartFilterByPrice = (assets: IAsset[]) => {
    const parsedAssets = [];

    for (const asset of assets) {
        const filteredAsset = (({ last_updated, price }) => ({
            last_updated,
            price,
        }))(asset);
        const parsedAsset = [
            parseInt(filteredAsset.last_updated),
            filteredAsset.price,
        ];
        parsedAssets.push(parsedAsset);
    }

    return parsedAssets;
};

export const chartFilterByMarketCap = (assets: IAsset[]) => {
    const parsedAssets = [];

    for (const asset of assets) {
        const filteredAsset = (({ last_updated, market_cap }) => ({
            last_updated,
            market_cap,
        }))(asset);
        const parsedAsset = [
            parseInt(filteredAsset.last_updated),
            filteredAsset.market_cap,
        ];
        parsedAssets.push(parsedAsset);
    }

    return parsedAssets;
};
