import IRenderText from '../../../interfaces/RenderText';
import { Link } from 'react-router-dom';
import React from 'react';

export const columnsVolume: any = [
    {
        title: 'Symbol',
        dataIndex: 'symbol',
        key: 'symbol',
        render: (text: IRenderText, record: { symbol: string }) => (
            <Link to={record.symbol}>{text}</Link>
        ),
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

export const columnsPrice: any = [
    {
        title: 'Symbol',
        dataIndex: 'symbol',
        key: 'symbol',
        render: (text: IRenderText, record: { symbol: string }) => (
            <Link to={record.symbol}>{text}</Link>
        ),
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

export const columns: any = [
    {
        title: 'Symbol',
        dataIndex: 'symbol',
        key: 'symbol',
        render: (text: IRenderText, record: { symbol: string }) => (
            <Link to={record.symbol}>{text}</Link>
        ),
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

export default { columns, columnsPrice, columnsVolume };
