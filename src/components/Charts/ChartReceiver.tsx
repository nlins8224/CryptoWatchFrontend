import {useLocation} from "react-router-dom";
import {useGetHistoricalSymbolData} from "./useGetHistoricalSymbolData";
import {cutByTimestamp, getMidnightXDaysAgoUTC, getMidnightXYearsAgoUTC} from "../../timeUtils";
import {Tabs} from "antd";
import ChartView from "./ChartView";
const { TabPane } = Tabs;

export const ChartReceiver = () => {
    const location = useLocation()
    const symbol = location.pathname.split('/').pop()

    const path1Min = `/historical-coins-1M/${symbol}`
    const path1Day = `/historical-coins-1D/${symbol}`

    const allOneMinuteAssets = useGetHistoricalSymbolData(path1Min)
    const allOneDayAssets = useGetHistoricalSymbolData(path1Day)

    const midnightUTC = getMidnightXDaysAgoUTC(0)
    const fiveDaysAgo = getMidnightXDaysAgoUTC(4)
    const thirtyDaysAgo = getMidnightXDaysAgoUTC(29)
    const oneYearAgo = getMidnightXYearsAgoUTC(1)
    const threeYearsAgo = getMidnightXYearsAgoUTC(3)
    const fiveYearsAgo = getMidnightXYearsAgoUTC(5)

    const dailyAssets = cutByTimestamp(midnightUTC, allOneMinuteAssets.data)
    const fiveDaysAssets = cutByTimestamp(fiveDaysAgo, allOneMinuteAssets.data)
    const thirtyDaysAssets = cutByTimestamp(thirtyDaysAgo, allOneDayAssets.data)
    const oneYearAssets = cutByTimestamp(oneYearAgo, allOneDayAssets.data)
    const threeYearsAssets = cutByTimestamp(threeYearsAgo, allOneDayAssets.data)
    const fiveYearsAssets = cutByTimestamp(fiveYearsAgo, allOneDayAssets.data)


    console.log(dailyAssets)
    console.log(fiveDaysAssets)
    console.log(thirtyDaysAssets)
    console.log(oneYearAssets)
    console.log(threeYearsAssets)
    console.log(fiveYearsAssets)

    return (
        <div>
            <ChartView />
        </div>
    )
}