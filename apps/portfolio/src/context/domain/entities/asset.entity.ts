import {QueryAsset, QueryResponse} from "./content-full.entity.ts";

export type AssetEntity = {
  title: string;
  url: string;
}

export type QueryAssetResponse = QueryResponse<QueryAsset<AssetEntity>>;
