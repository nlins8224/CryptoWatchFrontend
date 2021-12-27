import React, { useEffect, useState } from 'react';
import { getDatabase, onValue, ref } from 'firebase/database';
import { LiveCoinsTable } from './LiveCoinsTable';
import { Asset } from '../../Asset';
import 'antd/dist/antd.less';
import { LiveCoinsSortedBy } from './LiveCoinsSortedBy';
import { v4 as uuidv4 } from 'uuid';
import {Button, Col, DatePicker, Divider, Input, Row, Space} from 'antd';

const columnsVolume: any = [
  {
    title: 'Symbol',
    dataIndex: 'symbol',
    key: 'symbol',
  },
  {
    title: 'Volume',
    dataIndex: 'total_volume',
    key: 'volume',
  },
  {
    title: 'Change',
    dataIndex: 'price_change',
    key: 'change',
  },
  {
    title: '% Change',
    dataIndex: 'price_change_percentage',
    key: '% change',
  },
];

const columnsPrice: any = [
  {
    title: 'Symbol',
    dataIndex: 'symbol',
    key: 'symbol',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Change',
    dataIndex: 'price_change',
    key: 'change',
  },
  {
    title: '% Change',
    dataIndex: 'price_change_percentage',
    key: '% change',
  },
];

const db = getDatabase();
const liveCoinsRef = ref(db, '/live-coins');
const LiveCoinsReceiver: () => JSX.Element = () => {
  const [assetArray, setAssetArray] = useState<Asset[]>([]);

  const setAssetStatusListener = (ref: any) => {
    onValue(ref, (snapshot) => {
      const data: Map<string, Asset> = new Map(Object.entries(snapshot.val()));
      let assets: Asset[] = getAssets(data);
      assets = parseAssets(assets);
      setAssetArray(assets);
    });
  };

  const getAssets = (assetMap: Map<string, Asset> | undefined) => {
    const assets: Asset[] = [];
    assetMap?.forEach((value: Asset) => assets.push(value));
    return assets;
  };

  const parseAssets = (assetArray: Asset[]): Asset[] => {
    const assets = assetArray.map((obj) => ({ ...obj, key: uuidv4() }))
    assets.forEach(obj => obj.price_change_percentage = Number(obj.price_change_percentage.toFixed(4)));
    assets.forEach(obj => obj.price_change = Number(obj.price_change.toFixed(4)));
    assets.forEach(obj => obj.price = Number(obj.price.toFixed(4)));

    return assets
  };

  useEffect(() => {
    setAssetStatusListener(liveCoinsRef);
  }, []);

  const assetArrayByVolume = parseAssets(assetArray);
  const assetArrayByPriceChangeAsc = parseAssets(assetArray);
  const assetArrayByPriceChangeDsc = parseAssets(assetArray);

  return (
    <>
      <Row align="middle" gutter={[24, 24]}>
          <Col xs={{ span: 4, offset: 3 }} lg={{ span: 5, offset: 4 }}>
              <LiveCoinsSortedBy
                id={'1'}
                assets={assetArrayByVolume}
                sortKey={'total_volume'}
                sortType={'descending'}
                title={'Most Active'}
                columns={columnsVolume}
              />
          </Col>
          <Col xs={{ span: 4, offset: 0 }} lg={{ span: 5, offset: 0 }}>
              <LiveCoinsSortedBy
                id={'2'}
                assets={assetArrayByPriceChangeDsc}
                sortKey={'price_change_percentage'}
                sortType={'descending'}
                title={'Top Gainers'}
                columns={columnsPrice}
              />
          </Col>
          <Col xs={{ span: 4, offset: 0 }} lg={{ span: 5, offset: 0 }}>
              <LiveCoinsSortedBy
                id={'3'}
                assets={assetArrayByPriceChangeAsc}
                sortKey={'price_change_percentage'}
                sortType={'ascending'}
                title={'Top Losers'}
                columns={columnsPrice}
              />
          </Col>
        <Col xs={{ span: 12, offset: 3 }} lg={{ span: 15, offset: 4 }}>
          <LiveCoinsTable assets={assetArray} title={'Cryptocurrency'} />
        </Col>
      </Row>
    </>
  );
};

export { LiveCoinsReceiver };
