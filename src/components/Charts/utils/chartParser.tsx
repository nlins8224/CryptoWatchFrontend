import IAsset from '../../../interfaces/Asset';
import ChartSeriesName from "../../../interfaces/ChartSeriesName";
import {cutByTimestamp, getMidnightXDaysAgoUTC, getMidnightXYearsAgoUTC} from "../../../timeUtils";

// TODO: this should be one function
export const filterChartByPrice = (assets: IAsset[]) => {
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

export const filterChartByMarketCap = (assets: IAsset[]) => {
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


export const parseChartAssets = (data: IAsset[], seriesName: ChartSeriesName, timeAgo: number, timeFunction: (time: number) => number) => {
    const date = timeFunction(timeAgo);

    const parseMethod =
        seriesName.name === 'Price'
            ? filterChartByPrice
            : filterChartByMarketCap;

    return parseMethod(
        cutByTimestamp(date, data),
    )
}
