import IRenderText from '../../../interfaces/RenderText';
import { Link } from 'react-router-dom';
import React from 'react';
import { TableChart } from '../children/TableChart';
import {formatter} from "../../../formatter";

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
        title: 'Volume',
        dataIndex: 'total_volume',
        key: 'volume',
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

export const columnsCharts: any = [
    {
        title: 'Live Data',
        dataIndex: 'chart_data',
        key: 'chart_data',
        render: (text: IRenderText, record: { chart_data: number[][] }) => (
            <TableChart seriesData={record.chart_data} />
        ),
    },
];

export default { columns, columnsPrice, columnsVolume, columnsCharts };
