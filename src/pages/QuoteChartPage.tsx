import React from 'react';
import '../styles/App.less';
import { ChartView } from '../components/Charts/ChartView';
import { AssetInfoPanel } from '../components/AssetInfoPanel/AssetInfoPanel';
import { Col, Row } from 'antd';

const QuoteChartPage = () => {
    return (
        <div>
            <Row justify="center">
                <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    xl={24}
                    xxl={{ span: 18 }}
                >
                    <AssetInfoPanel />
                </Col>
                <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    xl={24}
                    xxl={{ span: 18 }}
                >
                    <ChartView />
                </Col>
            </Row>
        </div>
    );
};

export default QuoteChartPage;
