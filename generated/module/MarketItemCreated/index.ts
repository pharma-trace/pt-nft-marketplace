import {
    MarketItemCreated as marketItemCreatedEntity,
} from "../../schema"

export enum State {
    Created,
    Release,
    Inactive,
}
export class MarketItemResponse {

    isExist: boolean
    marketItemEntity: marketItemCreatedEntity
    constructor(_isExist: boolean, _marketItemEntity: marketItemCreatedEntity) {
        this.isExist = _isExist;
        this.marketItemEntity = _marketItemEntity
    }
}
export function getMarketItem(id: string): MarketItemResponse {
    let isExist = true;
    let entity = marketItemCreatedEntity.load(id);
    if (entity.id == "") {
        isExist = false;
    }
    var res = new MarketItemResponse(isExist, entity);
    return res;
} 
