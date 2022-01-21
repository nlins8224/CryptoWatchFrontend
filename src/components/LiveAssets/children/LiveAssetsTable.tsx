import React, {useEffect, useState} from 'react';
import {Table} from 'antd';
import IAsset from '../../../interfaces/Asset';
import 'antd/dist/antd.css';
import Text from 'antd/es/typography/Text';
import {v4 as uuidv4} from 'uuid';
import {formatAsset} from "../../../formatter";
import IAssetFormatted from "../../../interfaces/FormattedAsset";

const LiveAssetsTable = (props: {
    assets: Array<IAsset>;
    title: string;
    columns: any;
}): JSX.Element => {
    const [assetArray, setAssetArray] = useState<IAssetFormatted[]>([]);

    const prepareAssets = () => {
        const assetsWithKeyAndChartData = props.assets.map((obj) => ({
            ...obj,
            key: uuidv4(),
        }));

        const formattedAssets = assetsWithKeyAndChartData.map(asset => formatAsset(asset))

        setAssetArray(formattedAssets);
    };

    useEffect(() => {
        prepareAssets();
    }, [props]);

    return (
        <>
            <div className="live-assets-table">
                <Text>{props.title}</Text>
                <Table
                    dataSource={assetArray}
                    columns={props.columns}
                    pagination={false}
                />
            </div>
        </>
    );
};

export { LiveAssetsTable };
