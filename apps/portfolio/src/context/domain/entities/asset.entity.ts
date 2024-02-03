import { QueryAsset, QueryResponse } from './content-full.entity';

export type AssetEntity = {
  title: string;
  url: string;
};

export type QueryAssetResponse = QueryResponse<QueryAsset<AssetEntity>>;
