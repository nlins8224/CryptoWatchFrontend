import React, {useEffect, useState} from 'react';
import { Table } from 'antd';
import IAsset from '../../interfaces/Asset';
import 'antd/dist/antd.css';
import Text from "antd/es/typography/Text";
import {v4 as uuidv4} from "uuid";

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

const LiveCoinsTable = (props: { assets: Array<IAsset>, title: string }): JSX.Element => {
  const [assetArray, setAssetArray] = useState<IAsset[]>([]);

  const prepareAssets = () => {
    const assetsWithKey = props.assets.map((obj) => ({ ...obj, key: uuidv4() }))
    setAssetArray(assetsWithKey)
  }

  useEffect( () => {
    prepareAssets();
  }, [props])

  return (
    <>
      <div className="live-coins-title">
        <Text>{props.title}</Text>
        <Table dataSource={assetArray} columns={columns} pagination={false} size={'small'}/>
      </div>
    </>
  );
}

export { LiveCoinsTable }