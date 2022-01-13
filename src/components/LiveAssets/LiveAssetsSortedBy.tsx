import IAsset from '../../interfaces/Asset';
import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import Text from 'antd/es/typography/Text';
import { v4 as uuidv4 } from 'uuid';

const LiveAssetsSortedBy = (props: {
    assets: IAsset[];
    sortKey: 'total_volume' | 'price_change_percentage';
    sortType: 'ascending' | 'descending';
    id: string;
    title: string;
    columns: any;
}): JSX.Element => {
    const [assetArray, setAssetArray] = useState<IAsset[]>([]);

    const prepareAssets = () => {
        if (!Array.isArray(props.assets) || !props.assets.length) {
            return;
        }

        const ELEMENTS_AMOUNT = 8;
        const assetsWithKey = props.assets.map((obj) => ({
            ...obj,
            key: uuidv4(),
        }));

        if (props.sortType === 'ascending') {
            const sortedBy: Array<IAsset> = assetsWithKey
                .sort(
                    (a: IAsset, b: IAsset) =>
                        a[props.sortKey] - b[props.sortKey],
                )
                .slice(0, ELEMENTS_AMOUNT);
            setAssetArray(sortedBy);
        } else if (props.sortType === 'descending') {
            const sortedBy: Array<IAsset> = assetsWithKey
                .sort(
                    (a: IAsset, b: IAsset) =>
                        b[props.sortKey] - a[props.sortKey],
                )
                .slice(0, ELEMENTS_AMOUNT);
            setAssetArray(sortedBy);
        }
    };

    useEffect(() => {
        prepareAssets();
    }, [props]);

    return (
        <>
            <div id={props.id}>
                <Text>{props.title}</Text>
                <Table
                    dataSource={assetArray}
                    columns={props.columns}
                    pagination={false}
                    size={'small'}
                    rowKey={'key'}
                />
            </div>
        </>
    );
};

export { LiveAssetsSortedBy };
