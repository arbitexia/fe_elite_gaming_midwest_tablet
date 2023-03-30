export declare namespace AssetType {
  enum AssetItemType {
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    DOCUMENT = 'DOCUMENT',
  }

  type Gallery = {
    id: number;
    assetId: number;
    victimId: number;
    model: number;
    asset?: Asset;
  };

  type Asset = {
    name: string;
    id: string;
    desc?: string;
    type: string;
    url: string;
  };
}
