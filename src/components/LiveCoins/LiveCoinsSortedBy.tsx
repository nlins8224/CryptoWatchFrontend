import { Asset } from '../../Asset';
import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import Text from "antd/es/typography/Text";

const LiveCoinsSortedBy = (props: {
  assets: Asset[];
  sortKey: 'total_volume' | 'price_change_percentage';
  sortType: 'ascending' | 'descending';
  id: string;
  title: string;
  columns: any;
}): JSX.Element => {
  const [assetArray, setAssetArray] = useState<Asset[]>([]);

  const prepareAssets = () => {
    if (!Array.isArray(props.assets) || !props.assets.length) {
      return;
    }

    const ELEMENTS_AMOUNT = 8

    if (props.sortType === 'ascending') {
      const sortedBy: Array<Asset> = props.assets.sort(
        (a: Asset, b: Asset) => a[props.sortKey] - b[props.sortKey],
      ).slice(0, ELEMENTS_AMOUNT);
      setAssetArray(sortedBy);
    } else if (props.sortType === 'descending') {
      const sortedBy: Array<Asset> = props.assets.sort(
        (a: Asset, b: Asset) => b[props.sortKey] - a[props.sortKey],
      ).slice(0, ELEMENTS_AMOUNT);
      setAssetArray(sortedBy);
    }
  };

  useEffect(() => {
    prepareAssets();
  });

  return (
    <>
      <div className="live-coins-title" id={props.id}>
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

export { LiveCoinsSortedBy };
