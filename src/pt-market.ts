import { BigInt } from "@graphprotocol/graph-ts"
import {
  PTMarket,
  CollectionWhitelisted,
  CurrencyWhitelisted,
  FeePercentUpadated,
  ItemBought,
  ItemListed,
  ItemUnlisted,
  OfferAccepted,
  OfferCreated,
  OfferRejected,
  OfferWithdrawn,
  OwnershipTransferred,
  TradeExecuted,
  VoucherWritten
} from "../generated/PTMarket/PTMarket"
import {
  TradeExecutedEntity,
  VoucherWrittenEntity,
  CollectionWhitelistedEntity,
  CurrencyWhitelistedEntity,
  ItemBoughtEntity,
  FeePercentUpadatedEntity,
  OfferAcceptedEntity,
  OfferRejectedEntity,
  User
} from "../generated/schema"
import {
  getId,
  getNFTId,
  listedItemResponse,
  getListedItem,
  OfferCreateResponse,
  getCreateOffer,
  NFTOwnerResponse,
  getNFTOwner
} from "./utils/helper"

export function handleCollectionWhitelisted(
  event: CollectionWhitelisted
): void {
  let id = event.block.hash.toHex()
  let entity = CollectionWhitelistedEntity.load(id)
  if (entity == null) {
    entity = new CollectionWhitelistedEntity(id)
  }
  entity.collection = event.params.collection
  entity.ts = event.block.timestamp
  entity.save()
}

export function handleCurrencyWhitelisted(event: CurrencyWhitelisted): void {
  let id = event.params.currency.toHex()
  let entity = CurrencyWhitelistedEntity.load(id)
  if (entity == null) {
    entity = new CurrencyWhitelistedEntity(id)
  }
  // entity.currency = event.params.collection
  entity.ts = event.block.timestamp
  entity.addOrRemove = event.params.addOrRemove
  entity.save()
}

export function handleFeePercentUpadated(event: FeePercentUpadated): void {
  let id = event.transaction.from.toHex()
  let entity = FeePercentUpadatedEntity.load(id)
  if (entity == null) {
    entity = new FeePercentUpadatedEntity(id)
  }
  // entity.currency = event.params.collection
  entity.ts = event.block.timestamp
  entity.newFeePercent = event.params.newFeePercent
  entity.save()
}

export function handleItemBought(event: ItemBought): void {
  var NFTId = getNFTId(event.params.collection.toHexString(), event.params.buyer.toHexString(), event.params.tokenId.toHexString())
  let entity = ItemBoughtEntity.load(NFTId) // here we try to get old record

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ItemBoughtEntity(NFTId)
  }

  entity.collection = event.params.collection
  entity.buyer = event.params.buyer.toHexString()
  entity.tokenId = event.params.tokenId
  entity.isVoucher = event.params.isVoucher
  entity.status = true
  entity.save()

  // here we set  user data in one collection so we can map all the user related data in one collection
  let entityUser = User.load(event.transaction.hash.toHex())
  if (!entityUser) {
    entityUser = new User(event.transaction.from.toHex())
    entityUser.userAddress = event.params.buyer;
    entityUser.ts = event.block.timestamp
    entityUser.save()
  }
}

export function handleItemListed(event: ItemListed): void {
  var id = getNFTId(event.params.collection.toHexString(), event.params.seller.toHexString(), event.params.tokenId.toHexString())

  var listedItem: listedItemResponse = getListedItem(id);
  listedItem.listedItemEntity.collection = event.params.collection
  listedItem.listedItemEntity.tokenId = event.params.tokenId
  listedItem.listedItemEntity.seller = event.params.seller.toHexString()
  listedItem.listedItemEntity.currency = event.params.currency
  listedItem.listedItemEntity.minPrice = event.params.minPrice
  listedItem.listedItemEntity.expiry = event.params.expiry
  listedItem.listedItemEntity.isFixedPrice = event.params.isFixedPrice
  listedItem.listedItemEntity.ts = event.block.timestamp

  listedItem.listedItemEntity.status = true
  listedItem.listedItemEntity.save()
  // here we set  user data in one collection so we can map all the user related data in one collection
  let entityUser = User.load(event.transaction.hash.toHex())
  if (!entityUser) {
    entityUser = new User(event.transaction.from.toHex())
    entityUser.userAddress = event.params.seller;
    entityUser.ts = event.block.timestamp
    entityUser.save()
  }
}

export function handleItemUnlisted(event: ItemUnlisted): void {
  var id = getNFTId(event.params.collection.toHexString(), event.transaction.from.toHexString(), event.params.tokenId.toHexString())
  var listedItem: listedItemResponse = getListedItem(id);
  listedItem.listedItemEntity.status = false;
  listedItem.listedItemEntity.ts = event.block.timestamp;
  listedItem.listedItemEntity.save()

}

export function handleOfferAccepted(event: OfferAccepted): void {
  var NFTId = getNFTId(event.params.collection.toHexString(), event.params.buyer.toHexString(), event.params.tokenId.toHexString())

  let entity = OfferAcceptedEntity.load(NFTId)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new OfferAcceptedEntity(NFTId)
  }
  entity.buyer = event.params.buyer.toHexString()
  entity.collection = event.params.collection
  entity.ts = event.block.timestamp
  entity.tokenId = event.params.tokenId
  entity.save()
  let entityUser = User.load(event.transaction.hash.toHex())
  if (!entityUser) {
    entityUser = new User(event.transaction.from.toHex())
    entityUser.userAddress = event.params.buyer;
    entityUser.ts = event.block.timestamp
    entityUser.save()
  }
}

export function handleOfferCreated(event: OfferCreated): void {
  var NFTId = getNFTId(event.params.collection.toHexString(), event.params.buyer.toHexString(), event.params.tokenId.toHexString())

  var offer: OfferCreateResponse = getCreateOffer(NFTId);


  offer.offerCreatedEntity.buyer = event.params.buyer.toHexString()
  offer.offerCreatedEntity.collection = event.params.collection
  offer.offerCreatedEntity.tokenId = event.params.tokenId
  offer.offerCreatedEntity.offerPrice = event.params.offerPrice
  offer.offerCreatedEntity.isVoucher = event.params.isVoucher
  offer.offerCreatedEntity.ts = event.block.timestamp
  offer.offerCreatedEntity.status = true
  offer.offerCreatedEntity.save()
  let entityUser = User.load(event.transaction.hash.toHex())
  if (!entityUser) {
    entityUser = new User(event.transaction.from.toHex())
    entityUser.userAddress = event.params.buyer;
    entityUser.ts = event.block.timestamp
    entityUser.save()
  }
}

export function handleOfferRejected(event: OfferRejected): void {
  var NFTId = getNFTId(event.params.collection.toHexString(), event.params.buyer.toHexString(), event.params.tokenId.toHexString())

  let entity = OfferRejectedEntity.load(NFTId)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new OfferRejectedEntity(NFTId)
  }
  entity.buyer = event.params.buyer.toHexString()
  entity.collection = event.params.collection
  entity.ts = event.block.timestamp
  entity.tokenId = event.params.tokenId
  entity.save()
  // here we change the status of create offer record
  var offer: OfferCreateResponse = getCreateOffer(NFTId);
  if (offer.isExist) {
    offer.offerCreatedEntity.status = false; //truq -> open and false-> close
    offer.offerCreatedEntity.ts = event.block.timestamp
    offer.offerCreatedEntity.save()
  }
  let entityUser = User.load(event.transaction.hash.toHex())
  if (!entityUser) {
    entityUser = new User(event.transaction.from.toHex())
    entityUser.userAddress = event.params.buyer;
    entityUser.ts = event.block.timestamp
    entityUser.save()
  }
}

export function handleOfferWithdrawn(event: OfferWithdrawn): void {
  var NFTId = getNFTId(event.params.collection.toHexString(), event.transaction.from.toHexString(), event.params.tokenId.toHexString())
  var offer: OfferCreateResponse = getCreateOffer(NFTId);
  if (offer.isExist) {
    offer.offerCreatedEntity.status = false; //truq -> open and false-> close
    offer.offerCreatedEntity.ts = event.block.timestamp
    offer.offerCreatedEntity.save()
  }
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void { }

export function handleTradeExecuted(event: TradeExecuted): void {
  var NFTId = getNFTId(event.params.collection.toHexString(), event.params.buyer.toHexString(), event.params.tokenId.toHexString())
  var offer: OfferCreateResponse = getCreateOffer(NFTId);
  if (offer.isExist) {
    offer.offerCreatedEntity.status = false; //truq -> open and false-> close
    offer.offerCreatedEntity.ts = event.block.timestamp
    offer.offerCreatedEntity.save()
  }
  NFTId = getNFTId(event.params.collection.toHexString(), event.params.seller.toHexString(), event.params.tokenId.toHexString())

  var listedItem: listedItemResponse = getListedItem(NFTId);
  if (offer.isExist) {
    listedItem.listedItemEntity.status = false; //truq -> open and false-> close
    listedItem.listedItemEntity.ts = event.block.timestamp
    listedItem.listedItemEntity.save()
  }
  var nftOwner: NFTOwnerResponse = getNFTOwner(NFTId);
  if (nftOwner.isExist) {
    nftOwner.nftOwnerEntity.status = false;
    nftOwner.nftOwnerEntity.ts = event.block.timestamp
    nftOwner.nftOwnerEntity.save()
  }

  NFTId = getNFTId(event.params.collection.toHexString(), event.params.buyer.toHexString(), event.params.tokenId.toHexString())
  nftOwner = getNFTOwner(NFTId);
  if (!nftOwner.isExist) {
    nftOwner.nftOwnerEntity.collection = event.params.collection;
    nftOwner.nftOwnerEntity.tokenId = event.params.tokenId;
    nftOwner.nftOwnerEntity.buyer = event.params.buyer.toHexString();
    nftOwner.nftOwnerEntity.isVoucher = event.params.isVoucher;
    nftOwner.nftOwnerEntity.status = true;
    nftOwner.nftOwnerEntity.ts = event.block.timestamp
    nftOwner.nftOwnerEntity.save()
  }

  let entity = TradeExecutedEntity.load(NFTId)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new TradeExecutedEntity(NFTId)
  }
  entity.seller = event.params.seller
  entity.currency = event.params.currency
  entity.price = event.params.price
  entity.isVoucher = event.params.isVoucher
  entity.buyer = event.params.buyer
  entity.collection = event.params.collection
  entity.ts = event.block.timestamp
  entity.tokenId = event.params.tokenId
  entity.save()
  let entityUser = User.load(event.transaction.hash.toHex())
  if (!entityUser) {
    entityUser = new User(event.transaction.from.toHex())
    entityUser.userAddress = event.params.buyer;
    entityUser.ts = event.block.timestamp
    entityUser.save()
  }

}

export function handleVoucherWritten(event: VoucherWritten): void {
  var id = getId(event.params.collection.toHexString(), event.params.tokenId.toHexString())

  let entity = VoucherWrittenEntity.load(id)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new VoucherWrittenEntity(id)
  }
  entity.collection = event.params.collection
  entity.tokenId = event.params.tokenId
  entity.uri = event.params.uri
  entity.currency = event.params.currency
  entity.signature = event.params.signature
  entity.ts = event.block.timestamp
  entity.save()
}
