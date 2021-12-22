import {Asset} from "../../Asset";
import {Table} from "antd";
import React, {useEffect, useState} from "react";


const LiveCoinsSortedBy = (props: { assets : Asset[], sortKey: 'total_volume' | 'price_change_percentage',
    sortType: 'ascending' | 'descending', id: string, columns: any }): JSX.Element => {
    const [assetArray, setAssetArray] = useState<Asset[]>([]);

    const prepareAssets = () => {
        if (!Array.isArray(props.assets) || !props.assets.length) {
            return
        }

        console.log(assetArray)

        if (props.sortType === 'ascending') {
            const sortedBy: Array<Asset> =
                props.assets.sort((a: Asset, b: Asset) => a[props.sortKey] - b[props.sortKey])
            setAssetArray(sortedBy)
        }
        else if (props.sortType === 'descending') {
            const sortedBy: Array<Asset> =
                props.assets.sort((a: Asset, b: Asset) => b[props.sortKey] - a[props.sortKey])
            setAssetArray(sortedBy)
        }
    }

    useEffect( () => {
        prepareAssets()
    })

    return <>
        <div id={props.id}>
            <Table
                dataSource={assetArray}
                columns={props.columns}
                pagination={false}
                size={"small"}
                rowKey= {"key"}
            />
        </div>
    </>
}

export { LiveCoinsSortedBy }