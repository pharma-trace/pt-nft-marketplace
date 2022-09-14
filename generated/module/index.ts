// import {
//     AcceptOffer as acceptOfferEntity,
//     BuyNFT as buyNFTEntity,
//     CreateOffer as createOfferEntity,
//     FallbackCalled as fallbackCalledEntity,
//     ReceivedCalled as receivedCalledEntity,
//     RejectOffer as rejectOfferEntity,
//     WithDrawFromOffer as withDrawFromOfferEntity,
//     WithDrawAmount as withDrawAmountEntity,
//     WithDrawRefundAmount as withDrawRefundAmountEntity,
//     MarketItemCreated as marketItemCreatedEntity,
//     MarketItemDelete as marketItemDeleteEntity,
//     // NFTOwne as nftOwneEntity
// } from "./../schema"


export function getId(contractAddress: string, tokenId: string): string {
    return contractAddress + '-' + tokenId;
}

export function getNFTId(contractAddress: string, owner: string, tokenId: string): string {
    return contractAddress + '-' + owner + '-' + tokenId;
} 
