
import {
    CreateOffer as createOfferEntity,
} from "../../schema"

export enum OfferState {
    OPEN,
    CLOSE
}

export class CreateOfferResponse {
    isExist: boolean
    createOfferEntity: createOfferEntity
    constructor(_isExist: boolean, _createOfferEntity: createOfferEntity) {
        this.isExist = _isExist;
        this.createOfferEntity = _createOfferEntity
    }
}
export function getCreateOffer(id: string): CreateOfferResponse {
    let isExist = true;
    let entity = createOfferEntity.load(id);
    if (entity.id == "") {
        isExist = false;
    }
    var res = new CreateOfferResponse(isExist, entity);
    return res;
} 
