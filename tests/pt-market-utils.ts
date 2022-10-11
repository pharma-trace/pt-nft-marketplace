import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
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

export function createCollectionWhitelistedEvent(
  collection: Address
): CollectionWhitelisted {
  let collectionWhitelistedEvent = changetype<CollectionWhitelisted>(
    newMockEvent()
  )

  collectionWhitelistedEvent.parameters = new Array()

  collectionWhitelistedEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )

  return collectionWhitelistedEvent
}

export function createCurrencyWhitelistedEvent(
  currency: Address,
  addOrRemove: boolean
): CurrencyWhitelisted {
  let currencyWhitelistedEvent = changetype<CurrencyWhitelisted>(newMockEvent())

  currencyWhitelistedEvent.parameters = new Array()

  currencyWhitelistedEvent.parameters.push(
    new ethereum.EventParam("currency", ethereum.Value.fromAddress(currency))
  )
  currencyWhitelistedEvent.parameters.push(
    new ethereum.EventParam(
      "addOrRemove",
      ethereum.Value.fromBoolean(addOrRemove)
    )
  )

  return currencyWhitelistedEvent
}

export function createFeePercentUpadatedEvent(
  newFeePercent: BigInt
): FeePercentUpadated {
  let feePercentUpadatedEvent = changetype<FeePercentUpadated>(newMockEvent())

  feePercentUpadatedEvent.parameters = new Array()

  feePercentUpadatedEvent.parameters.push(
    new ethereum.EventParam(
      "newFeePercent",
      ethereum.Value.fromUnsignedBigInt(newFeePercent)
    )
  )

  return feePercentUpadatedEvent
}

export function createItemBoughtEvent(
  collection: Address,
  tokenId: BigInt,
  buyer: Address,
  isVoucher: boolean
): ItemBought {
  let itemBoughtEvent = changetype<ItemBought>(newMockEvent())

  itemBoughtEvent.parameters = new Array()

  itemBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  itemBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  itemBoughtEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  itemBoughtEvent.parameters.push(
    new ethereum.EventParam("isVoucher", ethereum.Value.fromBoolean(isVoucher))
  )

  return itemBoughtEvent
}

export function createItemListedEvent(
  collection: Address,
  tokenId: BigInt,
  seller: Address,
  currency: Address,
  minPrice: BigInt,
  expiry: BigInt,
  isFixedPrice: boolean
): ItemListed {
  let itemListedEvent = changetype<ItemListed>(newMockEvent())

  itemListedEvent.parameters = new Array()

  itemListedEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  itemListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  itemListedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  itemListedEvent.parameters.push(
    new ethereum.EventParam("currency", ethereum.Value.fromAddress(currency))
  )
  itemListedEvent.parameters.push(
    new ethereum.EventParam(
      "minPrice",
      ethereum.Value.fromUnsignedBigInt(minPrice)
    )
  )
  itemListedEvent.parameters.push(
    new ethereum.EventParam("expiry", ethereum.Value.fromUnsignedBigInt(expiry))
  )
  itemListedEvent.parameters.push(
    new ethereum.EventParam(
      "isFixedPrice",
      ethereum.Value.fromBoolean(isFixedPrice)
    )
  )

  return itemListedEvent
}

export function createItemUnlistedEvent(
  collection: Address,
  tokenId: BigInt
): ItemUnlisted {
  let itemUnlistedEvent = changetype<ItemUnlisted>(newMockEvent())

  itemUnlistedEvent.parameters = new Array()

  itemUnlistedEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  itemUnlistedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return itemUnlistedEvent
}

export function createOfferAcceptedEvent(
  collection: Address,
  tokenId: BigInt,
  buyer: Address
): OfferAccepted {
  let offerAcceptedEvent = changetype<OfferAccepted>(newMockEvent())

  offerAcceptedEvent.parameters = new Array()

  offerAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  offerAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  offerAcceptedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return offerAcceptedEvent
}

export function createOfferCreatedEvent(
  collection: Address,
  tokenId: BigInt,
  buyer: Address,
  offerPrice: BigInt,
  isVoucher: boolean
): OfferCreated {
  let offerCreatedEvent = changetype<OfferCreated>(newMockEvent())

  offerCreatedEvent.parameters = new Array()

  offerCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  offerCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  offerCreatedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  offerCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "offerPrice",
      ethereum.Value.fromUnsignedBigInt(offerPrice)
    )
  )
  offerCreatedEvent.parameters.push(
    new ethereum.EventParam("isVoucher", ethereum.Value.fromBoolean(isVoucher))
  )

  return offerCreatedEvent
}

export function createOfferRejectedEvent(
  collection: Address,
  tokenId: BigInt,
  buyer: Address
): OfferRejected {
  let offerRejectedEvent = changetype<OfferRejected>(newMockEvent())

  offerRejectedEvent.parameters = new Array()

  offerRejectedEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  offerRejectedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  offerRejectedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return offerRejectedEvent
}

export function createOfferWithdrawnEvent(
  collection: Address,
  tokenId: BigInt
): OfferWithdrawn {
  let offerWithdrawnEvent = changetype<OfferWithdrawn>(newMockEvent())

  offerWithdrawnEvent.parameters = new Array()

  offerWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  offerWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return offerWithdrawnEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTradeExecutedEvent(
  collection: Address,
  tokenId: BigInt,
  seller: Address,
  buyer: Address,
  currency: Address,
  price: BigInt,
  isVoucher: boolean
): TradeExecuted {
  let tradeExecutedEvent = changetype<TradeExecuted>(newMockEvent())

  tradeExecutedEvent.parameters = new Array()

  tradeExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  tradeExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  tradeExecutedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  tradeExecutedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  tradeExecutedEvent.parameters.push(
    new ethereum.EventParam("currency", ethereum.Value.fromAddress(currency))
  )
  tradeExecutedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  tradeExecutedEvent.parameters.push(
    new ethereum.EventParam("isVoucher", ethereum.Value.fromBoolean(isVoucher))
  )

  return tradeExecutedEvent
}

export function createVoucherWrittenEvent(
  collection: Address,
  tokenId: BigInt,
  uri: string,
  currency: Address,
  signature: Bytes
): VoucherWritten {
  let voucherWrittenEvent = changetype<VoucherWritten>(newMockEvent())

  voucherWrittenEvent.parameters = new Array()

  voucherWrittenEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  voucherWrittenEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  voucherWrittenEvent.parameters.push(
    new ethereum.EventParam("uri", ethereum.Value.fromString(uri))
  )
  voucherWrittenEvent.parameters.push(
    new ethereum.EventParam("currency", ethereum.Value.fromAddress(currency))
  )
  voucherWrittenEvent.parameters.push(
    new ethereum.EventParam("signature", ethereum.Value.fromBytes(signature))
  )

  return voucherWrittenEvent
}
