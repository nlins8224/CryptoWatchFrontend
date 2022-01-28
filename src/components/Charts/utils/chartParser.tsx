import IAsset from '../../../interfaces/Asset';
import ChartSeriesName from '../../../interfaces/ChartSeriesName';
import { cutByTimestamp } from '../../../timeUtils';

// TODO: this should be one function
export const filterChartByPrice = (assets: IAsset[]) => {
    const parsedAssets = [];

    for (const asset of assets) {
        const filteredAsset = (({ last_updated, price, total_volume }) => ({
            last_updated,
            price,
            total_volume,
        }))(asset);
        const parsedAsset = [
            parseInt(filteredAsset.last_updated),
            filteredAsset.price,
            filteredAsset.total_volume,
        ];
        parsedAssets.push(parsedAsset);
    }

    return parsedAssets;
};

export const filterChartByMarketCap = (assets: IAsset[]) => {
    const parsedAssets = [];

    for (const asset of assets) {
        const filteredAsset = (({
            last_updated,
            market_cap,
            total_volume,
        }) => ({
            last_updated,
            market_cap,
            total_volume,
        }))(asset);
        const parsedAsset = [
            parseInt(filteredAsset.last_updated),
            filteredAsset.market_cap,
            filteredAsset.total_volume,
        ];
        parsedAssets.push(parsedAsset);
    }

    return parsedAssets;
};

export const parseChartAssets = (
    data: IAsset[],
    seriesName: ChartSeriesName,
    timeAgo: number,
    timeFunction: (time: number) => number,
) => {
    const time = timeFunction(timeAgo);

    const parseMethod =
        seriesName.name === 'Price'
            ? filterChartByPrice
            : filterChartByMarketCap;

    return parseMethod(cutByTimestamp(time, data));
};
