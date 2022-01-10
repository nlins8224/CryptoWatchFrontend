import IRenderText from "../../../interfaces/RenderText";
import {Link} from "react-router-dom";
import React from "react";

export const columns: any = [
    {
        title: 'Symbol',
        dataIndex: 'symbol',
        key: 'symbol',
        render: (text: IRenderText, record: { symbol: string; }) => <Link to={record.symbol}>{text}</Link>,
        sorter: (a: { symbol: string; }, b: { symbol: any; }) => a.symbol.localeCompare(b.symbol)
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name)
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        sorter: (a: { price: number; }, b: { price: number; }) => a.price - b.price

    },
    {
        title: 'Price Change',
        dataIndex: 'price_change',
        key: 'price_change',
        sorter: (a: { price_change: number; }, b: { price_change: number; }) => a.price_change - b.price_change
    },
    {
        title: '% Price Change',
        dataIndex: 'price_change_percentage',
        key: 'price_change_percentage',
        sorter: (a: { price_change_percentage: number; }, b: { price_change_percentage: number; }) => a.price_change_percentage - b.price_change_percentage

    },
    {
        title: 'High',
        dataIndex: 'high',
        key: 'high',
        sorter: (a: { high: number; }, b: { high: number; }) => a.high - b.high

    },
    {
        title: 'Low',
        dataIndex: 'low',
        key: 'low',
        sorter: (a: { low: number; }, b: { low: number; }) => a.low - b.low

    },
];

export default {columns}

