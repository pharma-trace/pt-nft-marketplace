import { BigInt } from "@graphprotocol/graph-ts"
import {
  PTNFTMarketPlace,
  AcceptOffer,
  BuyNFT,
  CreateOffer,
  FallbackCalled,
  MarketItemCreated,
  MarketItemDelete,
  ReceivedCalled,
  RejectOffer,
  WithDrawAmount,
  WithDrawFromOffer,
  WithDrawRefundAmount
} from "../generated/PTNFTMarketPlace/PTNFTMarketPlace"
import {
  AcceptOffer as acceptOfferEntity,
  BuyNFT as buyNFTEntity,
  CreateOffer as createOfferEntity,
  FallbackCalled as fallbackCalledEntity,
  ReceivedCalled as receivedCalledEntity,
  RejectOffer as rejectOfferEntity,
  WithDrawFromOffer as withDrawFromOfferEntity,
  WithDrawAmount as withDrawAmountEntity,
  WithDrawRefundAmount as withDrawRefundAmountEntity,
  MarketItemCreated as marketItemCreatedEntity,
  MarketItemDelete as marketItemDeleteEntity,
  NFTOwne as nftOwneEntity,
  User as userEntity
} from "../generated/schema"

import { getId, getNFTId } from "./../generated/module"
import { getMarketItem, State, MarketItemResponse } from "./../generated/module/MarketItemCreated"
import { getCreateOffer, OfferState, CreateOfferResponse } from "./../generated/module/CreateOffer"
import { getNFTOwner, NFTOwnerResponse } from "./../generated/module/NFT"

export function handleBuyNFT(event: BuyNFT): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  var id = getId(event.params.contractAddress.toString(), event.params.tokenId.toString())
  var NFTId = getNFTId(event.params.contractAddress.toString(), event.params.owner.toString(), event.params.tokenId.toString())

  let entity = buyNFTEntity.load(id)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new buyNFTEntity(id)
    var marketItem: MarketItemResponse = getMarketItem(id);
    if (marketItem.isExist) {
      marketItem.marketItemEntity.state = State.Release;
      marketItem.marketItemEntity.save()
    }
    var offer: CreateOfferResponse = getCreateOffer(NFTId);
    if (offer.isExist) {
      offer.createOfferEntity.status = OfferState.CLOSE;
      offer.createOfferEntity.save()
    }
    var nftOwner: NFTOwnerResponse = getNFTOwner(NFTId);
    if (nftOwner.isExist) {
      nftOwner.nftOwnerEntity.status = false;
      nftOwner.nftOwnerEntity.save()
    }
    // Entity fields can be set using simple assignments
    // Entity fields can be set based on event parameters
    entity.tokenId = event.params.tokenId
    entity.offerAmount = event.params.offerAmount
    entity.contractAddress = event.params.contractAddress
    entity.owner = event.params.owner

    entity.offerBy = event.params.offerBy
    // Entities can be written to the store with `.save()`
    entity.save()
    // Entity fields can be set using simple assignments
    NFTId = getNFTId(event.params.contractAddress.toString(), event.params.offerBy.toString(), event.params.tokenId.toString())

    var entityNFT: NFTOwnerResponse = getNFTOwner(NFTId);
    if (!entityNFT.isExist) {
      entityNFT.nftOwnerEntity.status = true;
      entityNFT.nftOwnerEntity.save()
    }
    let entityUser = userEntity.load(event.transaction.from.toHex())

    if (!entityUser) {
      entityUser = new userEntity(event.transaction.from.toHex())
      entityUser.userAddress = event.params.offerBy;
      entityUser.save()
    }
    // Entity fields can be set using simple assignments
  }
}
export function handleCreateOffer(event: CreateOffer): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  var id = getNFTId(event.params.contractAddress.toString(), event.params.offerBy.toString(), event.params.tokenId.toString())
  var offer: CreateOfferResponse = getCreateOffer(id);
  if (!offer.isExist) {
    offer.createOfferEntity.tokenId = event.params.tokenId
    offer.createOfferEntity.offerAmount = event.params.offerAmount
    offer.createOfferEntity.contractAddress = event.params.contractAddress
    offer.createOfferEntity.totalOffers = event.params.totalOffers
    offer.createOfferEntity.startAt = event.params.startAt

    offer.createOfferEntity.expiresAt = event.params.expiresAt
    offer.createOfferEntity.offerBy = event.params.offerBy
    offer.createOfferEntity.status = event.params.status

    // Entities can be written to the store with `.save()`
    offer.createOfferEntity.save()
    let entity = userEntity.load(event.transaction.from.toHex())

    if (!entity) {
      entity = new userEntity(event.transaction.from.toHex())
      entity.userAddress = event.params.offerBy;
      entity.save()
    }

  } else {
    offer.createOfferEntity.offerAmount = event.params.offerAmount
    offer.createOfferEntity.totalOffers = event.params.totalOffers
    offer.createOfferEntity.startAt = event.params.startAt
    offer.createOfferEntity.expiresAt = event.params.expiresAt
    offer.createOfferEntity.status = event.params.status
  }


}
export function handleRejectOffer(event: RejectOffer): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  var id = getId(event.params.contractAddress.toString(), event.params.tokenId.toString())
  var NFTId = getNFTId(event.params.contractAddress.toString(), event.params.offerBy.toString(), event.params.tokenId.toString())

  let entity = acceptOfferEntity.load(id)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new acceptOfferEntity(id)

    // Entity fields can be set using simple assignments
    // Entity fields can be set based on event parameters
    entity.tokenId = event.params.tokenId
    entity.offerAmount = event.params.offerAmount
    entity.owner = event.params.owner

    entity.contractAddress = event.params.contractAddress
    entity.offerBy = event.params.offerBy
    entity.status = event.params.status
    var offer: CreateOfferResponse = getCreateOffer(NFTId);
    if (offer.isExist) {
      offer.createOfferEntity.status = OfferState.CLOSE;
      offer.createOfferEntity.save()
    }
    // Entities can be written to the store with `.save()`
    entity.save()
    let entityUser = userEntity.load(event.transaction.from.toHex())

    if (!entityUser) {
      entityUser = new userEntity(event.transaction.from.toHex())
      entityUser.userAddress = event.params.owner;
      entityUser.save()
    }
    // Entity fields can be set using simple assignments
  }
}
export function handleAcceptOffer(event: AcceptOffer): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  var id = getId(event.params.contractAddress.toString(), event.params.tokenId.toString())
  var NFTId = getNFTId(event.params.contractAddress.toString(), event.params.owner.toString(), event.params.tokenId.toString())

  let entity = acceptOfferEntity.load(id)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new acceptOfferEntity(id)
    var marketItem: MarketItemResponse = getMarketItem(id);
    if (marketItem.isExist) {
      marketItem.marketItemEntity.state = State.Release;
      marketItem.marketItemEntity.save()
    }
    var offer: CreateOfferResponse = getCreateOffer(NFTId);
    if (offer.isExist) {
      offer.createOfferEntity.status = OfferState.CLOSE;
      offer.createOfferEntity.save()
    }
    var nftOwner: NFTOwnerResponse = getNFTOwner(NFTId);
    if (nftOwner.isExist) {
      nftOwner.nftOwnerEntity.status = false;
      nftOwner.nftOwnerEntity.save()
    }


    // Entity fields can be set using simple assignments
    // Entity fields can be set based on event parameters
    entity.tokenId = event.params.tokenId
    entity.offerAmount = event.params.offerAmount
    entity.owner = event.params.owner

    entity.contractAddress = event.params.contractAddress
    entity.offerBy = event.params.offerBy
    entity.status = event.params.status

    // Entities can be written to the store with `.save()`
    entity.save()
    // Entity fields can be set using simple assignments
    NFTId = getNFTId(event.params.contractAddress.toString(), event.params.offerBy.toString(), event.params.tokenId.toString())

    var entityNFT: NFTOwnerResponse = getNFTOwner(NFTId);
    if (!entityNFT.isExist) {
      var entityBuy = new buyNFTEntity(id)

      // EntityBuy fields can be set using simple assignments
      // EntityBuy fields can be set based on event parameters
      entityBuy.tokenId = event.params.tokenId
      entityBuy.offerAmount = event.params.offerAmount
      entityBuy.contractAddress = event.params.contractAddress
      entityBuy.owner = event.params.owner

      entityBuy.offerBy = event.params.offerBy
      // Entities can be written to the store with `.save()`
      entityBuy.save()
      entityNFT.nftOwnerEntity.tokenId = NFTId;
      entityNFT.nftOwnerEntity.status = true;
      entityNFT.nftOwnerEntity.save()
    }
    let entityUser = userEntity.load(event.transaction.from.toHex())

    if (!entityUser) {
      entityUser = new userEntity(event.transaction.from.toHex())
      entityUser.userAddress = event.params.owner;
      entityUser.save()
    }
  }
}
export function handleMarketItemCreated(event: MarketItemCreated): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  var id = getId(event.params.contractAddress.toString(), event.params.tokenId.toString())

  var marketItem: MarketItemResponse = getMarketItem(id);
  if (marketItem.isExist) {

    // Entity fields can be set using simple assignments
    // Entity fields can be set based on event parameters
    marketItem.marketItemEntity.tokenId = event.params.tokenId
    marketItem.marketItemEntity.seller = event.params.seller
    marketItem.marketItemEntity.contractAddress = event.params.contractAddress
    marketItem.marketItemEntity.buyer = event.params.buyer
    marketItem.marketItemEntity.minPrice = event.params.minPrice
    marketItem.marketItemEntity.maxPrice = event.params.maxPrice
    marketItem.marketItemEntity.isFixedPrice = event.params.isFixedPrice
    marketItem.marketItemEntity.startAt = event.params.startAt
    marketItem.marketItemEntity.expiresAt = event.params.expiresAt
    marketItem.marketItemEntity.state = event.params.state

    // Entities can be written to the store with `.save()`
    marketItem.marketItemEntity.save()
    // Entity fields can be set using simple assignments
    let entityUser = userEntity.load(event.transaction.from.toHex())

    if (!entityUser) {
      entityUser = new userEntity(event.transaction.from.toHex())
      entityUser.userAddress = event.params.seller;
      entityUser.save()
    }
  }
}
export function handleMarketItemDelete(event: MarketItemDelete): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  var id = getId(event.params.contractAddress.toString(), event.params.tokenId.toString())

  let entity = marketItemDeleteEntity.load(id)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    var marketItem: MarketItemResponse = getMarketItem(id);
    if (marketItem.isExist) {
      marketItem.marketItemEntity.state = State.Inactive;
      marketItem.marketItemEntity.save()
    }
    entity = new marketItemDeleteEntity(id)

    // Entity fields can be set using simple assignments
    // Entity fields can be set based on event parameters
    entity.tokenId = event.params.tokenId
    entity.seller = event.params.seller
    entity.contractAddress = event.params.contractAddress
    entity.state = event.params.state

    // Entities can be written to the store with `.save()`
    entity.save()
    // Entity fields can be set using simple assignments
  }
}
export function handleFallbackCalled(event: FallbackCalled): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = fallbackCalledEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new fallbackCalledEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    // Entity fields can be set based on event parameters
    entity.buyer = event.params.buyer
    entity.amount = event.params.amount

    // Entities can be written to the store with `.save()`
    entity.save()
    // Entity fields can be set using simple assignments
  }
}
export function handleReceivedCalled(event: ReceivedCalled): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = receivedCalledEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new receivedCalledEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    // Entity fields can be set based on event parameters
    entity.buyer = event.params.buyer
    entity.amount = event.params.amount

    // Entities can be written to the store with `.save()`
    entity.save()
    // Entity fields can be set using simple assignments
  }
}
export function handleWithDrawAmount(event: WithDrawAmount): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = withDrawAmountEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new withDrawAmountEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    // Entity fields can be set based on event parameters
    entity.offerAmount = event.params.amount
    entity.offerBy = event.params.offerBy


    // Entities can be written to the store with `.save()`
    entity.save()
    // Entity fields can be set using simple assignments
  }
}
export function handleWithDrawFromOffer(event: WithDrawFromOffer): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = withDrawFromOfferEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new withDrawFromOfferEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    // Entity fields can be set based on event parameters
    entity.tokenId = event.params.tokenId
    entity.offerAmount = event.params.offerAmount
    entity.offerBy = event.params.offerBy

    // Entities can be written to the store with `.save()`
    entity.save()
    // Entity fields can be set using simple assignments
  }
}
export function handleWithDrawRefundAmount(event: WithDrawRefundAmount): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  var id = getId(event.params.contractAddress.toString(), event.params.tokenId.toString())
  var NFTId = getNFTId(event.params.contractAddress.toString(), event.params.offerBy.toString(), event.params.tokenId.toString())

  let entity = withDrawRefundAmountEntity.load(id)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new withDrawRefundAmountEntity(id)
    var offer: CreateOfferResponse = getCreateOffer(NFTId);
    if (offer.isExist) {
      offer.createOfferEntity.status = OfferState.CLOSE;
      offer.createOfferEntity.save()
    }
    // Entity fields can be set using simple assignments
    // Entity fields can be set based on event parameters
    entity.amount = event.params.amount
    entity.offerBy = event.params.offerBy

    // Entities can be written to the store with `.save()`
    entity.save()
    // Entity fields can be set using simple assignments
  }
}
