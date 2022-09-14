import {
    BuyNFT
} from "../../schema"

export class NFTOwnerResponse {
    isExist: boolean
    nftOwnerEntity: BuyNFT
    constructor(_isExist: boolean, _nftOwnerEntity: BuyNFT) {
        this.isExist = _isExist;
        this.nftOwnerEntity = _nftOwnerEntity
    }
}
export function getNFTOwner(id: string): NFTOwnerResponse {
    let isExist = true;
    let entity = BuyNFT.load(id);
    if (!entity) {
        isExist = false;
        entity = new BuyNFT(id);
    }
    var res = new NFTOwnerResponse(isExist, entity);

    return res;
} 
