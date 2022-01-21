import IAssetFormatted from "./interfaces/FormattedAsset";
import {v4 as uuidv4} from "uuid";
import IAsset from "./interfaces/Asset";

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
});

export const percentFormatter = new Intl.NumberFormat('en-US', {
    style: 'percent',

    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
});

export const formatAsset = (asset: IAsset): IAssetFormatted => {
        return {
            id: asset.id,
            symbol: asset.symbol,
            name: asset.name,
            last_updated: asset.last_updated,
            market_cap_rank: asset.market_cap_rank.toString(),

            price: formatter.format(asset.price),
            price_change: formatter.format(asset.price_change),
            total_volume: formatter.format(asset.total_volume),
            high: formatter.format(asset.high),
            low: formatter.format(asset.low),
            market_cap: formatter.format(asset.market_cap),

            price_change_percentage: percentFormatter.format(asset.price_change_percentage),
            market_cap_change: percentFormatter.format(asset.market_cap_change),

            key: uuidv4()
        }
}
