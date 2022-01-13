import React from 'react';
import '../styles/App.less';
import { ChartView } from '../components/Charts/ChartView';
import { AssetInfoPanel } from '../components/AssetInfoPanel/AssetInfoPanel';
import { Col, Row } from 'antd';

const QuoteChartPage = () => {
    return (
        <div>
            <Row align="middle">
                <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    xl={24}
                    xxl={{ span: 16, offset: 4 }}
                >
                    <AssetInfoPanel />
                </Col>
                <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    xl={24}
                    xxl={{ span: 16, offset: 4 }}
                >
                    <ChartView />
                </Col>
            </Row>
        </div>
    );
};

export default QuoteChartPage;
