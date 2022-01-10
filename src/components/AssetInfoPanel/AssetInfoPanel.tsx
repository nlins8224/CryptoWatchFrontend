import {Descriptions, PageHeader} from "antd";
import {useLiveAssetStatusListener} from "./useLiveAssetStatusListener";

export const AssetInfoPanel = () => {
    const liveAsset = useLiveAssetStatusListener()

    return (
        <div className="asset-info-panel">
            <PageHeader
                ghost={true}
                onBack={() => window.history.back()}
                title={liveAsset?.symbol}
                subTitle={liveAsset?.name}
            >
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Price">{liveAsset?.price}</Descriptions.Item>
                    <Descriptions.Item label="Volume">{liveAsset?.total_volume}</Descriptions.Item>
                    <Descriptions.Item label="Market Cap Rank">{liveAsset?.market_cap_rank}</Descriptions.Item>

                    <Descriptions.Item label="Price Change %">{liveAsset?.price_change}</Descriptions.Item>
                    <Descriptions.Item label="High">{liveAsset?.high}</Descriptions.Item>
                    <Descriptions.Item label="Market Cap Change">{liveAsset?.market_cap_change}</Descriptions.Item>

                    <Descriptions.Item label="Price Change">{liveAsset?.price_change_percentage}</Descriptions.Item>
                    <Descriptions.Item label="Low">{liveAsset?.low}</Descriptions.Item>
                    <Descriptions.Item label="Market Cap">{liveAsset?.market_cap}</Descriptions.Item>
                </Descriptions>
            </PageHeader>
        </div>
    )
}