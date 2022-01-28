import IRenderText from '../../../interfaces/RenderText';
import { Link } from 'react-router-dom';
import React from 'react';
import { TableChart } from '../children/TableChart';

export const columnsVolume: any = [
    {
        title: 'Symbol',
        dataIndex: 'symbol',
        key: 'symbol',
        align: 'center' as const,
        render: (text: IRenderText, record: { symbol: string }) => (
            <Link to={record.symbol.toLowerCase()}>{text}</Link>
        ),
    },
    {
        title: 'Volume',
        dataIndex: 'total_volume',
        key: 'volume',
        align: 'center' as const,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        align: 'center' as const,
    },
    {
        title: 'Market Cap',
        dataIndex: 'market_cap',
        key: 'market cap',
        align: 'center' as const,
    },
];

export const columnsPrice: any = [
    {
        title: 'Symbol',
        dataIndex: 'symbol',
        key: 'symbol',
        align: 'center' as const,
        render: (text: IRenderText, record: { symbol: string }) => (
            <Link to={record.symbol.toLowerCase()}>{text}</Link>
        ),
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        align: 'center' as const,
    },
    {
        title: '24h Change',
        dataIndex: 'price_change',
        key: 'change',
        align: 'center' as const,
    },
    {
        title: '24h % Change',
        dataIndex: 'price_change_percentage',
        key: '% change',
        align: 'center' as const,
    },
];

export const columns: any = [
    {
        title: 'Symbol',
        dataIndex: 'symbol',
        key: 'symbol',
        render: (text: IRenderText, record: { symbol: string }) => (
            <Link to={record.symbol.toLowerCase()}>{text}</Link>
        ),
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        align: 'center' as const,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        align: 'center' as const,
    },
    {
        title: '24h Change',
        dataIndex: 'price_change',
        key: 'price_change',
        align: 'center' as const,
    },
    {
        title: '24h % Change',
        dataIndex: 'price_change_percentage',
        key: 'price_change_percentage',
        align: 'center' as const,
    },
    {
        title: 'Volume',
        dataIndex: 'total_volume',
        key: 'volume',
        align: 'center' as const,
    },
    {
        title: 'Market Cap',
        dataIndex: 'market_cap',
        key: 'market cap',
        align: 'center' as const,
    },
    {
        title: '24h High',
        dataIndex: 'high',
        key: 'high',
        align: 'center' as const,
    },
    {
        title: '24h Low',
        dataIndex: 'low',
        key: 'low',
        align: 'center' as const,
    },
];

export const columnsCharts: any = [
    {
        title: 'Chart Data',
        dataIndex: 'chart_data',
        key: 'chart_data',
        align: 'center' as const,
        render: (text: IRenderText, record: { chart_data: number[][] }) => (
            <TableChart seriesData={record.chart_data} />
        ),
    },
];

export default { columns, columnsPrice, columnsVolume, columnsCharts };
