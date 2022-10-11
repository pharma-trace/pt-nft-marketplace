
import {
  ItemListedEntity as itemListedEntity,
  OfferCreatedEntity as offerCreatedEntity,
  ItemBoughtEntity as itemBoughtEntity
} from "../../generated/schema"


export function getId(contractAddress: string, tokenId: string): string {
  return contractAddress + "-" + tokenId;
}

export function getNFTId(
  contractAddress: string,
  owner: string,
  tokenId: string
): string {
  return contractAddress + "-" + owner + "-" + tokenId;
}



export class listedItemResponse {

  isExist: boolean
  listedItemEntity: itemListedEntity
  constructor(_isExist: boolean, _listedItemEntity: itemListedEntity) {
    this.isExist = _isExist;
    this.listedItemEntity = _listedItemEntity
  }
}
export function getListedItem(id: string): listedItemResponse {
  let isExist = true;
  let entity = itemListedEntity.load(id);
  if (!entity) {
    isExist = false;
    entity = new itemListedEntity(id);
  }
  var res = new listedItemResponse(isExist, entity);
  return res;
}


export class OfferCreateResponse {
  isExist: boolean
  offerCreatedEntity: offerCreatedEntity
  constructor(_isExist: boolean, _offerCreatedEntity: offerCreatedEntity) {
    this.isExist = _isExist;
    this.offerCreatedEntity = _offerCreatedEntity
  }
}
export function getCreateOffer(id: string): OfferCreateResponse {
  let isExist = true;
  let entity = offerCreatedEntity.load(id);
  if (!entity) {
    isExist = false;
    entity = new offerCreatedEntity(id);
  }
  var res = new OfferCreateResponse(isExist, entity);
  return res;
}


export class NFTOwnerResponse {
  isExist: boolean
  nftOwnerEntity: itemBoughtEntity
  constructor(_isExist: boolean, _nftOwnerEntity: itemBoughtEntity) {
    this.isExist = _isExist;
    this.nftOwnerEntity = _nftOwnerEntity
  }
}
export function getNFTOwner(id: string): NFTOwnerResponse {
  let isExist = true;
  let entity = itemBoughtEntity.load(id);
  if (!entity) {
    isExist = false;
    entity = new itemBoughtEntity(id);
  }
  var res = new NFTOwnerResponse(isExist, entity);

  return res;
} 