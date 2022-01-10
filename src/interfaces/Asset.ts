export default interface IAsset {
  high?: number;
  low?: number;
  id?: string;
  last_updated: string;
  market_cap?: number;
  market_cap_change?: number;
  market_cap_rank?: number;
  name?: string;
  price: number;
  price_change: number;
  price_change_percentage: number;
  symbol: string;
  total_volume: number;
  key?: string;
}
