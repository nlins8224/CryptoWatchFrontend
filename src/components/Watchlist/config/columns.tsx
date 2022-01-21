import IRenderText from '../../../interfaces/RenderText';
import { Link } from 'react-router-dom';
import React from 'react';

export const columns: any = [
    {
        title: 'Symbol',
        dataIndex: 'symbol',
        key: 'symbol',
        render: (text: IRenderText, record: { symbol: string }) => (
            <Link to={record.symbol}>{text}</Link>
        )
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

export default { columns };
