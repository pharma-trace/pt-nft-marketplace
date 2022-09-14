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
  WithDrawRefundAmount, TotalNumberOfOfferOnMarketPlace, TotalNumberOfItemMarketPlace
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
  // NFTOwne as nftOwneEntity,
  User as userEntity,
  TotalNumberOfItemMarketPlace as totalNumberOfItemMarketPlaceEntity,
  TotalNumberOfOfferOnMarketPlace as totalNumberOfOfferOnMarketPlaceEntity
} from "../generated/schema"

import { getId, getNFTId } from "./../generated/module"
import { getMarketItem, State, MarketItemResponse } from "./../generated/module/MarketItemCreated"
import { getCreateOffer, OfferState, CreateOfferResponse } from "./../generated/module/CreateOffer"
import { getNFTOwner, NFTOwnerResponse } from "./../generated/module/NFT"
/**
 * Here we will setup all the action which are trigger when this event occur
 * @param event This will contain all the information related to buy NFT 
 */
export function handleBuyNFT(event: BuyNFT): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  // this used to get the NFT Uniqe ID which we used to modifiy or create the 
  var NFTId = getNFTId(event.params.contractAddress.toHexString(), event.params.offerBy.toHexString(), event.params.tokenId.toHexString())

  let entity = buyNFTEntity.load(NFTId) // here we try to get old record

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new buyNFTEntity(NFTId)
  }
  // var offer: CreateOfferResponse = getCreateOffer(NFTId); // get 
  // if (offer.isExist) {
  //   offer.createOfferEntity.status = "1";
  //   offer.createOfferEntity.ts = event.block.timestamp

  //   offer.createOfferEntity.save()
  // }

  //  here we generate the key again to modifiy the exisiting record to notifiy Owner and Buyer the transaction occur
  NFTId = getNFTId(event.params.contractAddress.toHexString(), event.params.owner.toHexString(), event.params.tokenId.toHexString())
  var marketItem: MarketItemResponse = getMarketItem(NFTId); // get market item details
  if (marketItem.isExist) { // it will be ture when record exist  fasle me the NFT is Lazzy Minted and Mint first-time
    marketItem.marketItemEntity.state = "1"; // 0 -> created 1 -> released
    marketItem.marketItemEntity.ts = event.block.timestamp
    marketItem.marketItemEntity.save()
  }
  // here we change old NFT owner start to false mean it will not be owner anymore
  var nftOwner: NFTOwnerResponse = getNFTOwner(NFTId);
  if (nftOwner.isExist) {
    nftOwner.nftOwnerEntity.status = false;
    nftOwner.nftOwnerEntity.ts = event.block.timestamp

    nftOwner.nftOwnerEntity.save()
  }
  // Entity fields can be set using simple assignments
  // Entity fields can be set based on event parameters
  entity.tokenId = event.params.tokenId
  entity.offerAmount = event.params.offerAmount
  entity.contractAddress = event.params.contractAddress
  entity.oldOwner = event.params.owner
  entity.status = true
  entity.ts = event.block.timestamp

  entity.owner = event.params.offerBy.toHexString()
  // Entities can be written to the store with `.save()`
  entity.save()
  // Entity fields can be set using simple assignments
  NFTId = getNFTId(event.params.contractAddress.toHexString(), event.params.offerBy.toHexString(), event.params.tokenId.toHexString())

  var entityNFT: NFTOwnerResponse = getNFTOwner(NFTId);
  if (!entityNFT.isExist) {
    entityNFT.nftOwnerEntity.status = true;
    entityNFT.nftOwnerEntity.save()
  }
  // here we set  user data in one collection so we can map all the user related data in one collection
  let entityUser = userEntity.load(event.transaction.from.toHex())
  if (!entityUser) {
    entityUser = new userEntity(event.transaction.from.toHex())
    entityUser.userAddress = event.params.offerBy;
    entityUser.ts = event.block.timestamp
    entityUser.save()
  }
  // Entity fields can be set using simple assignments
  // }
}
/**
 * This event function is trigger when someone create new offer on NFT marketplace
 * @param event 
 */
export function handleCreateOffer(event: CreateOffer): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type

  var id = getNFTId(event.params.contractAddress.toHexString(), event.params.offerBy.toHexString(), event.params.tokenId.toHexString())
  var offer: CreateOfferResponse = getCreateOffer(id);

  offer.createOfferEntity.tokenId = event.params.tokenId
  offer.createOfferEntity.offerAmount = event.params.offerAmount
  offer.createOfferEntity.contractAddress = event.params.contractAddress
  offer.createOfferEntity.totalOffers = event.params.totalOffers
  offer.createOfferEntity.startAt = event.params.startAt
  offer.createOfferEntity.ts = event.block.timestamp
  offer.createOfferEntity.expiresAt = event.params.expiresAt
  offer.createOfferEntity.offerBy = event.params.offerBy.toHexString()
  offer.createOfferEntity.status = event.params.status.toString();

  // Entities can be written to the store with `.save()`
  offer.createOfferEntity.save()
  let entity = userEntity.load(event.transaction.from.toHex())
  // here we set  user data in one collection so we can map all the user related data in one collection

  if (!entity) {
    entity = new userEntity(event.transaction.from.toHex())
    entity.userAddress = event.params.offerBy;
    entity.ts = event.block.timestamp

    entity.save()
  }
}
/**
 * This Event function is for reject offer on marketplace
 * @param event 
 */
export function handleRejectOffer(event: RejectOffer): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  // var id = getId(event.params.contractAddress.toHexString(), event.params.tokenId.toHexString())
  var NFTId = getNFTId(event.params.contractAddress.toHexString(), event.params.offerBy.toHexString(), event.params.tokenId.toHexString())

  let entity = rejectOfferEntity.load(NFTId)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  // if (!entity) {
  entity = new rejectOfferEntity(NFTId)

  // Entity fields can be set using simple assignments
  // Entity fields can be set based on event parameters
  entity.tokenId = event.params.tokenId
  entity.offerAmount = event.params.offerAmount
  entity.owner = event.params.owner.toHexString()
  entity.contractAddress = event.params.contractAddress
  entity.offerBy = event.params.offerBy
  entity.ts = event.block.timestamp
  entity.status = event.params.status.toString()
  entity.save()

  // here we change the status of create offer record
  var offer: CreateOfferResponse = getCreateOffer(NFTId);
  if (offer.isExist) {
    offer.createOfferEntity.status = "1"; //0 -> open and 1-> close
    offer.createOfferEntity.ts = event.block.timestamp
    offer.createOfferEntity.save()
  }
  // Entities can be written to the store with `.save()`
  let entityUser = userEntity.load(event.transaction.from.toHex())

  if (!entityUser) {
    entityUser = new userEntity(event.transaction.from.toHex())
    entityUser.userAddress = event.params.owner;
    entityUser.ts = event.block.timestamp

    entityUser.save()
  }
  // Entity fields can be set using simple assignments
  // }
}
/**
 * This is for Accept offer when ever the owner accept offer the offer record is close and we create a Buy object 
 * which tell the new owner and make old owner status false
 * @param event 
 */
export function handleAcceptOffer(event: AcceptOffer): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  var id = getId(event.params.contractAddress.toHexString(), event.params.tokenId.toHexString())
  var NFTId = getNFTId(event.params.contractAddress.toHexString(), event.params.offerBy.toHexString(), event.params.tokenId.toHexString())

  let entity = acceptOfferEntity.load(NFTId)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new acceptOfferEntity(NFTId)
  }
  // first close item record both from Market record  and create offer record
  var marketItem: MarketItemResponse = getMarketItem(id);
  if (marketItem.isExist) {
    marketItem.marketItemEntity.state = "1";
    marketItem.marketItemEntity.ts = event.block.timestamp

    marketItem.marketItemEntity.save()
  }
  var offer: CreateOfferResponse = getCreateOffer(NFTId);
  if (offer.isExist) {
    offer.createOfferEntity.status = "1";
    offer.createOfferEntity.ts = event.block.timestamp

    offer.createOfferEntity.save()
  }
  // here we change the status of old NFT owner to false which tell this user is no longer owner of that NFT
  NFTId = getNFTId(event.params.contractAddress.toHexString(), event.params.owner.toHexString(), event.params.tokenId.toHexString())
  // this will return old owner buy NFT object record so we can change status to false
  var nftOwner: NFTOwnerResponse = getNFTOwner(NFTId);
  if (nftOwner.isExist) {
    nftOwner.nftOwnerEntity.status = false;
    nftOwner.nftOwnerEntity.ts = event.block.timestamp

    nftOwner.nftOwnerEntity.save()
  }

  // create Accept offer record
  // Entity fields can be set using simple assignments
  // Entity fields can be set based on event parameters
  entity.tokenId = event.params.tokenId
  entity.offerAmount = event.params.offerAmount
  entity.owner = event.params.owner.toHexString()
  entity.contractAddress = event.params.contractAddress
  entity.offerBy = event.params.offerBy
  entity.status = event.params.status.toString()
  entity.ts = event.block.timestamp

  // Entities can be written to the store with `.save()`
  entity.save()
  // Entity fields can be set using simple assignments
  // here we create record for new buy item which tell the New owner of NFT
  NFTId = getNFTId(event.params.contractAddress.toHexString(), event.params.offerBy.toHexString(), event.params.tokenId.toHexString())

  var entityBuy: NFTOwnerResponse = getNFTOwner(NFTId);

  entityBuy.nftOwnerEntity.tokenId = event.params.tokenId
  entityBuy.nftOwnerEntity.offerAmount = event.params.offerAmount
  entityBuy.nftOwnerEntity.contractAddress = event.params.contractAddress
  entityBuy.nftOwnerEntity.oldOwner = event.params.owner
  entityBuy.nftOwnerEntity.owner = event.params.offerBy.toHexString()
  entityBuy.nftOwnerEntity.status = true; // true mean owner and false mean not owner any more
  entityBuy.nftOwnerEntity.ts = event.block.timestamp
  // Entities can be written to the store with `.save()`
  entityBuy.nftOwnerEntity.save()


  let entityUser = userEntity.load(event.transaction.from.toHex())

  if (!entityUser) {
    entityUser = new userEntity(event.transaction.from.toHex())
    entityUser.userAddress = event.params.owner;
    entityUser.ts = event.block.timestamp

    entityUser.save()
  }
  // }
}
/**
 * Here we record the market item in subgraph which we popup as notification to UI
 * @param event 
 */
export function handleMarketItemCreated(event: MarketItemCreated): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  var id = getNFTId(event.params.contractAddress.toHexString(), event.params.seller.toHexString(), event.params.tokenId.toHexString())

  var marketItem: MarketItemResponse = getMarketItem(id);
  // if (!marketItem.isExist) {
  // Entity fields can be set using simple assignments
  // Entity fields can be set based on event parameters
  marketItem.marketItemEntity.tokenId = event.params.tokenId
  marketItem.marketItemEntity.seller = event.params.seller.toHexString();
  marketItem.marketItemEntity.contractAddress = event.params.contractAddress
  marketItem.marketItemEntity.buyer = event.params.buyer
  marketItem.marketItemEntity.minPrice = event.params.minPrice
  marketItem.marketItemEntity.isFixedPrice = event.params.isFixedPrice
  marketItem.marketItemEntity.startAt = event.params.startAt
  marketItem.marketItemEntity.expiresAt = event.params.expiresAt
  marketItem.marketItemEntity.state = event.params.state.toString();
  marketItem.marketItemEntity.ts = event.block.timestamp


  // Entities can be written to the store with `.save()`
  marketItem.marketItemEntity.save()

  // Entity fields can be set using simple assignments
  let entityUser = userEntity.load(event.transaction.from.toHex())

  if (!entityUser) {
    entityUser = new userEntity(event.transaction.from.toHex())
    entityUser.userAddress = event.params.seller;
    entityUser.ts = event.block.timestamp

    entityUser.save()
  }
  // }
}
/**
 * Here we create record for delete Item and update  market item to Inactive 
 * @param event 
 */
export function handleMarketItemDelete(event: MarketItemDelete): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  // var id = getId(event.params.contractAddress.toHexString(), event.params.tokenId.toHexString())
  var nftId = getNFTId(event.params.contractAddress.toHexString(), event.params.seller.toHexString(), event.params.tokenId.toHexString())

  let entity = marketItemDeleteEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    var marketItem: MarketItemResponse = getMarketItem(nftId);
    if (marketItem.isExist) {
      marketItem.marketItemEntity.state = "2";
      marketItem.marketItemEntity.ts = event.block.timestamp

      marketItem.marketItemEntity.save()
    }
    entity = new marketItemDeleteEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    // Entity fields can be set based on event parameters
    entity.tokenId = event.params.tokenId
    entity.seller = event.params.seller
    entity.contractAddress = event.params.contractAddress
    entity.state = event.params.state.toString()
    entity.ts = event.block.timestamp

    // Entities can be written to the store with `.save()`
    entity.save()
    // Entity fields can be set using simple assignments
  }
}
/**
 * This is for fallback event
 * @param event 
 */
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
    entity.ts = event.block.timestamp

    // Entities can be written to the store with `.save()`
    entity.save()
    // Entity fields can be set using simple assignments
  }
}
/**
 * This is for Recevived any uneven payments
 * @param event 
 */
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
    entity.ts = event.block.timestamp

    // Entities can be written to the store with `.save()`
    entity.save()
    // Entity fields can be set using simple assignments
  }
}
/**
 * This is for With Draw Amount it tell when some one have amount is return because of any following reason
 * some one offer more amount then your
 * your offer is rejected
 * or some one bought the NFT 
 * @param event 
 */
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
    entity.ts = event.block.timestamp


    // Entities can be written to the store with `.save()`
    entity.save()
    // Entity fields can be set using simple assignments
  }
}
/**
 * This is for with from offer 
 * @param event 
 */
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
    entity.contractAddress = event.params.contractAddress
    entity.offerAmount = event.params.offerAmount
    entity.offerBy = event.params.offerBy
    entity.ts = event.block.timestamp

    // Entities can be written to the store with `.save()`
    entity.save()
    // Entity fields can be set using simple assignments
  }
}
export function handleWithDrawRefundAmount(event: WithDrawRefundAmount): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  var id = getId(event.params.contractAddress.toHexString(), event.params.tokenId.toHexString())
  var NFTId = getNFTId(event.params.contractAddress.toHexString(), event.params.offerBy.toHexString(), event.params.tokenId.toHexString())

  let entity = withDrawRefundAmountEntity.load(id)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new withDrawRefundAmountEntity(id)
    var offer: CreateOfferResponse = getCreateOffer(NFTId);
    if (offer.isExist) {
      offer.createOfferEntity.status = "1";
      offer.createOfferEntity.ts = event.block.timestamp

      offer.createOfferEntity.save()
    }
    // Entity fields can be set using simple assignments
    // Entity fields can be set based on event parameters
    entity.amount = event.params.amount
    entity.tokenId = event.params.tokenId
    entity.contractAddress = event.params.contractAddress
    entity.offerBy = event.params.offerBy
    entity.ts = event.block.timestamp

    // Entities can be written to the store with `.save()`
    entity.save()
    // Entity fields can be set using simple assignments
  }
}
/**
 * this will tell te total number of Item created in marketplace
 * @param event 
 */
export function handleTotalNumberOfItemMarketPlace(event: TotalNumberOfItemMarketPlace): void {

  let entity = totalNumberOfItemMarketPlaceEntity.load("TotalNumberOfItemMarketPlace")

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new totalNumberOfItemMarketPlaceEntity("TotalNumberOfOfferOnMarketPlace")
    entity.total = event.params.itemSoldCounter
    entity.ts = event.block.timestamp

    // Entities can be written to the store with `.save()`
    entity.save()
    // Entity fields can be set using simple assignments
  } else {
    entity.total = event.params.itemSoldCounter
    entity.ts = event.block.timestamp

    // Entities can be written to the store with `.save()`
    entity.save()
  }
}
/**
 * Number of offer made on Marketplace
 * @param event 
 */
export function handleTotalNumberOfOfferOnMarketPlace(
  event: TotalNumberOfOfferOnMarketPlace
): void {
  let entity = totalNumberOfOfferOnMarketPlaceEntity.load("TotalNumberOfOfferOnMarketPlace")

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new totalNumberOfOfferOnMarketPlaceEntity("TotalNumberOfOfferOnMarketPlace")
    entity.total = event.params.totalOfferOnMarketPlace
    entity.ts = event.block.timestamp

    // Entities can be written to the store with `.save()`
    entity.save()
    // Entity fields can be set using simple assignments
  } else {
    entity.total = event.params.totalOfferOnMarketPlace
    entity.ts = event.block.timestamp

    // Entities can be written to the store with `.save()`
    entity.save()
  }
}