import {
    NFTOwne
} from "../../schema"

export class NFTOwnerResponse {
    isExist: boolean
    nftOwnerEntity: NFTOwne
    constructor(_isExist: boolean, _nftOwnerEntity: NFTOwne) {
        this.isExist = _isExist;
        this.nftOwnerEntity = _nftOwnerEntity
    }
}
export function getNFTOwner(id: string): NFTOwnerResponse {
    let isExist = true;
    let entity = NFTOwne.load(id);
    if (entity.id == "") {
        isExist = false;
    }
    var res = new NFTOwnerResponse(isExist, entity);

    return res;
} 
