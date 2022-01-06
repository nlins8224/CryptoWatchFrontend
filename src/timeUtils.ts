import IAsset from "./interfaces/Asset";

const ONE_DAY_IN_MS = (24 * 60 * 60 * 1000)

export const getMidnightXYearsAgoUTC = (yearsAgo: number) => {
    const xYearsAgo = new Date().setUTCFullYear(new Date().getUTCFullYear() - yearsAgo)
    const dailyOffset = xYearsAgo % ONE_DAY_IN_MS
    return xYearsAgo - dailyOffset
}

export const getMidnightXDaysAgoUTC = (daysAgo: number) => {
    const xDaysAgo = new Date().setUTCDate(new Date().getUTCDate() - daysAgo)
    const dailyOffset = xDaysAgo % ONE_DAY_IN_MS
    return xDaysAgo - dailyOffset
}

export const cutByTimestamp = (end: number, data: IAsset[]) => {
    return data.filter(data => Number(data.last_updated) >= end)
}
