import React from 'react';
import '../styles/App.less';
import {Col, Row} from "antd";

const AboutPage = () => {
    return (
        <div className="page-text">
            <Row justify="center">
              <Col xs={20} sm={20} md={20} lg={20} xl={20} xxl={{ span: 14 }}>
                  CryptoWatch is non commercial price tracking website for cryptocurrency.
                  Its purpose is to provide accurate information for the user to draw their own informed
                  conclusions <br/>
                  <br/>
                  CryptoWatch uses Coingecko API. <br />
                  Price, trading volume and market capitalization are updated every 1 to 10 minutes

              </Col>
            </Row>
        </div>
    )
};

export default AboutPage;
