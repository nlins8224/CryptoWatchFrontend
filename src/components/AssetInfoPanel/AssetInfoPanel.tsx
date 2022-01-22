import { Descriptions, PageHeader } from 'antd';
import { useLiveAssetEventListener } from '../../hooks/useLiveAssetEventListener';
import SubscribeButton from './children/SubscribeButton';
import {formatter} from "../../formatter";

export const AssetInfoPanel = () => {
    const liveAsset = useLiveAssetEventListener();

    console.log(liveAsset)

    if (liveAsset == undefined)
        return <></>

    return (
        <div className="asset-info-panel">
            <PageHeader
                ghost={true}
                onBack={() => window.history.back()}
                title={liveAsset?.symbol}
                subTitle={liveAsset?.name}
                extra={[<SubscribeButton />]}
            >
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Price">
                        {formatter.format(liveAsset?.price)}
                    </Descriptions.Item>
                    <Descriptions.Item label="Volume">
                        {formatter.format(liveAsset?.total_volume)}
                    </Descriptions.Item>
                    <Descriptions.Item label="Market Cap Rank">
                        {liveAsset?.market_cap_rank}
                    </Descriptions.Item>
                    <Descriptions.Item label="Price Change">
                        {formatter.format(liveAsset?.price_change)}
                    </Descriptions.Item>
                    <Descriptions.Item label="High">
                        {formatter.format(liveAsset?.high)}
                    </Descriptions.Item>
                    <Descriptions.Item label="Market Cap Change">
                        {formatter.format(liveAsset?.market_cap_change)}
                    </Descriptions.Item>

                    <Descriptions.Item label="Price Change Percentage">
                        {liveAsset?.price_change_percentage}%
                    </Descriptions.Item>
                    <Descriptions.Item label="Low">
                        {formatter.format(liveAsset?.low)}
                    </Descriptions.Item>
                    <Descriptions.Item label="Market Cap">
                        {formatter.format(liveAsset?.market_cap)}
                    </Descriptions.Item>
                </Descriptions>
            </PageHeader>
        </div>
    );
};
