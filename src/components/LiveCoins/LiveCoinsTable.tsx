import React from 'react';
import { Table } from 'antd';
import IAsset from '../../interfaces/Asset';
import 'antd/dist/antd.css';
import Text from "antd/es/typography/Text";

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

export function LiveCoinsTable(props: { assets: Array<IAsset>, title: string }): JSX.Element {
  return (
    <>
      <div className="live-coins-title">
        <Text>{props.title}</Text>
        <Table dataSource={props.assets} columns={columns} pagination={false} size={'small'}/>
      </div>
    </>
  );
}
