import React from "react";
import {Table} from "antd";
import {Asset} from "../../Asset";
import "antd/dist/antd.css"

const columns: any = [
    {
        title: 'Symbol',
        dataIndex: 'symbol',
        key: 'symbol',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Price Change',
        dataIndex: 'price_change',
        key: 'price_change',
    },
    {
        title: '% Price Change',
        dataIndex: 'price_change_percentage',
        key: 'price_change_percentage',
    },
    {
        title: 'High',
        dataIndex: 'high',
        key: 'high',
    },
    {
        title: 'Low',
        dataIndex: 'low',
        key: 'low',
    },
];

export function LiveCoinsTable(props: { assets : Array<Asset> }): JSX.Element {
    return <>
        <div>
            <Table
                dataSource={props.assets}
                columns={columns}
                pagination={false}
            />
        </div>
    </>
}