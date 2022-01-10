import React from 'react';
import '../styles/App.less';
import {ChartView} from "../components/Charts/ChartView";
import {AssetInfoPanel} from "../components/AssetInfoPanel/AssetInfoPanel";
import {Col, Row} from "antd";
import SubscribeButton from "../components/Watchlist/SubscribeButton";

const QuoteChartPage = () => {
    return (
        <div className="quote-chart-page">
            <SubscribeButton/>
            <Row>
                <Col xs={24} xl={16}>
                    <AssetInfoPanel/>
                </Col>
                <Col xs={24} xl={16}>
                    <ChartView />
                </Col>
            </Row>
        </div>
    );
}

export default QuoteChartPage;