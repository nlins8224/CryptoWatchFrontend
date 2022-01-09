import {Descriptions, PageHeader} from "antd";
import {useLocation} from "react-router-dom";

export const AssetInfoPanel = () => {
    const location = useLocation()
    const symbol = location.pathname.split('/').pop()

    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title={symbol}
                subTitle={symbol}
            >
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
                    <Descriptions.Item label="Association">
                        <a>421421</a>
                    </Descriptions.Item>
                    <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
                    <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
                    <Descriptions.Item label="Remarks">
                        Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
                    </Descriptions.Item>
                </Descriptions>
            </PageHeader>
        </div>
    )
}