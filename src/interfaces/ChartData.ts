import IAsset from './Asset';

export type ChartData = Pick<
  IAsset,
  'last_updated' | 'price' | 'symbol' | 'total_volume'
>;
