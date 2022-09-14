import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  AcceptOffer,
  BuyNFT,
  CreateOffer,
  FallbackCalled,
  MarketItemCreated,
  MarketItemDelete,
  ReceivedCalled,
  RejectOffer,
  TotalNumberOfItemMarketPlace,
  TotalNumberOfOfferOnMarketPlace,
  WithDrawAmount,
  WithDrawFromOffer,
  WithDrawRefundAmount
} from "../generated/PTNFTMarketPlace/PTNFTMarketPlace"

export function createAcceptOfferEvent(
  tokenId: BigInt,
  owner: Address,
  contractAddress: Address,
  offerAmount: BigInt,
  offerBy: Address,
  status: i32
): AcceptOffer {
  let acceptOfferEvent = changetype<AcceptOffer>(newMockEvent())

  acceptOfferEvent.parameters = new Array()

  acceptOfferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  acceptOfferEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  acceptOfferEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )
  acceptOfferEvent.parameters.push(
    new ethereum.EventParam(
      "offerAmount",
      ethereum.Value.fromUnsignedBigInt(offerAmount)
    )
  )
  acceptOfferEvent.parameters.push(
    new ethereum.EventParam("offerBy", ethereum.Value.fromAddress(offerBy))
  )
  acceptOfferEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )

  return acceptOfferEvent
}

export function createBuyNFTEvent(
  tokenId: BigInt,
  owner: Address,
  contractAddress: Address,
  offerAmount: BigInt,
  offerBy: Address
): BuyNFT {
  let buyNftEvent = changetype<BuyNFT>(newMockEvent())

  buyNftEvent.parameters = new Array()

  buyNftEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  buyNftEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  buyNftEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )
  buyNftEvent.parameters.push(
    new ethereum.EventParam(
      "offerAmount",
      ethereum.Value.fromUnsignedBigInt(offerAmount)
    )
  )
  buyNftEvent.parameters.push(
    new ethereum.EventParam("offerBy", ethereum.Value.fromAddress(offerBy))
  )

  return buyNftEvent
}

export function createCreateOfferEvent(
  tokenId: BigInt,
  contractAddress: Address,
  offerAmount: BigInt,
  totalOffers: BigInt,
  startAt: BigInt,
  expiresAt: BigInt,
  offerBy: Address,
  status: i32
): CreateOffer {
  let createOfferEvent = changetype<CreateOffer>(newMockEvent())

  createOfferEvent.parameters = new Array()

  createOfferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  createOfferEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )
  createOfferEvent.parameters.push(
    new ethereum.EventParam(
      "offerAmount",
      ethereum.Value.fromUnsignedBigInt(offerAmount)
    )
  )
  createOfferEvent.parameters.push(
    new ethereum.EventParam(
      "totalOffers",
      ethereum.Value.fromUnsignedBigInt(totalOffers)
    )
  )
  createOfferEvent.parameters.push(
    new ethereum.EventParam(
      "startAt",
      ethereum.Value.fromUnsignedBigInt(startAt)
    )
  )
  createOfferEvent.parameters.push(
    new ethereum.EventParam(
      "expiresAt",
      ethereum.Value.fromUnsignedBigInt(expiresAt)
    )
  )
  createOfferEvent.parameters.push(
    new ethereum.EventParam("offerBy", ethereum.Value.fromAddress(offerBy))
  )
  createOfferEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )

  return createOfferEvent
}

export function createFallbackCalledEvent(
  buyer: Address,
  amount: BigInt
): FallbackCalled {
  let fallbackCalledEvent = changetype<FallbackCalled>(newMockEvent())

  fallbackCalledEvent.parameters = new Array()

  fallbackCalledEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  fallbackCalledEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fallbackCalledEvent
}

export function createMarketItemCreatedEvent(
  tokenId: BigInt,
  contractAddress: Address,
  seller: Address,
  buyer: Address,
  minPrice: BigInt,
  isFixedPrice: boolean,
  startAt: BigInt,
  expiresAt: BigInt,
  state: i32
): MarketItemCreated {
  let marketItemCreatedEvent = changetype<MarketItemCreated>(newMockEvent())

  marketItemCreatedEvent.parameters = new Array()

  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "minPrice",
      ethereum.Value.fromUnsignedBigInt(minPrice)
    )
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "isFixedPrice",
      ethereum.Value.fromBoolean(isFixedPrice)
    )
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "startAt",
      ethereum.Value.fromUnsignedBigInt(startAt)
    )
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "expiresAt",
      ethereum.Value.fromUnsignedBigInt(expiresAt)
    )
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "state",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(state))
    )
  )

  return marketItemCreatedEvent
}

export function createMarketItemDeleteEvent(
  tokenId: BigInt,
  contractAddress: Address,
  seller: Address,
  state: i32
): MarketItemDelete {
  let marketItemDeleteEvent = changetype<MarketItemDelete>(newMockEvent())

  marketItemDeleteEvent.parameters = new Array()

  marketItemDeleteEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  marketItemDeleteEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )
  marketItemDeleteEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  marketItemDeleteEvent.parameters.push(
    new ethereum.EventParam(
      "state",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(state))
    )
  )

  return marketItemDeleteEvent
}

export function createReceivedCalledEvent(
  buyer: Address,
  amount: BigInt
): ReceivedCalled {
  let receivedCalledEvent = changetype<ReceivedCalled>(newMockEvent())

  receivedCalledEvent.parameters = new Array()

  receivedCalledEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  receivedCalledEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return receivedCalledEvent
}

export function createRejectOfferEvent(
  tokenId: BigInt,
  owner: Address,
  contractAddress: Address,
  offerAmount: BigInt,
  offerBy: Address,
  status: i32
): RejectOffer {
  let rejectOfferEvent = changetype<RejectOffer>(newMockEvent())

  rejectOfferEvent.parameters = new Array()

  rejectOfferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  rejectOfferEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  rejectOfferEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )
  rejectOfferEvent.parameters.push(
    new ethereum.EventParam(
      "offerAmount",
      ethereum.Value.fromUnsignedBigInt(offerAmount)
    )
  )
  rejectOfferEvent.parameters.push(
    new ethereum.EventParam("offerBy", ethereum.Value.fromAddress(offerBy))
  )
  rejectOfferEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )

  return rejectOfferEvent
}

export function createTotalNumberOfItemMarketPlaceEvent(
  itemSoldCounter: BigInt
): TotalNumberOfItemMarketPlace {
  let totalNumberOfItemMarketPlaceEvent = changetype<
    TotalNumberOfItemMarketPlace
  >(newMockEvent())

  totalNumberOfItemMarketPlaceEvent.parameters = new Array()

  totalNumberOfItemMarketPlaceEvent.parameters.push(
    new ethereum.EventParam(
      "itemSoldCounter",
      ethereum.Value.fromUnsignedBigInt(itemSoldCounter)
    )
  )

  return totalNumberOfItemMarketPlaceEvent
}

export function createTotalNumberOfOfferOnMarketPlaceEvent(
  totalOfferOnMarketPlace: BigInt
): TotalNumberOfOfferOnMarketPlace {
  let totalNumberOfOfferOnMarketPlaceEvent = changetype<
    TotalNumberOfOfferOnMarketPlace
  >(newMockEvent())

  totalNumberOfOfferOnMarketPlaceEvent.parameters = new Array()

  totalNumberOfOfferOnMarketPlaceEvent.parameters.push(
    new ethereum.EventParam(
      "totalOfferOnMarketPlace",
      ethereum.Value.fromUnsignedBigInt(totalOfferOnMarketPlace)
    )
  )

  return totalNumberOfOfferOnMarketPlaceEvent
}

export function createWithDrawAmountEvent(
  offerBy: Address,
  amount: BigInt
): WithDrawAmount {
  let withDrawAmountEvent = changetype<WithDrawAmount>(newMockEvent())

  withDrawAmountEvent.parameters = new Array()

  withDrawAmountEvent.parameters.push(
    new ethereum.EventParam("offerBy", ethereum.Value.fromAddress(offerBy))
  )
  withDrawAmountEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withDrawAmountEvent
}

export function createWithDrawFromOfferEvent(
  tokenId: BigInt,
  contractAddress: Address,
  offerAmount: BigInt,
  offerBy: Address
): WithDrawFromOffer {
  let withDrawFromOfferEvent = changetype<WithDrawFromOffer>(newMockEvent())

  withDrawFromOfferEvent.parameters = new Array()

  withDrawFromOfferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  withDrawFromOfferEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )
  withDrawFromOfferEvent.parameters.push(
    new ethereum.EventParam(
      "offerAmount",
      ethereum.Value.fromUnsignedBigInt(offerAmount)
    )
  )
  withDrawFromOfferEvent.parameters.push(
    new ethereum.EventParam("offerBy", ethereum.Value.fromAddress(offerBy))
  )

  return withDrawFromOfferEvent
}

export function createWithDrawRefundAmountEvent(
  tokenId: BigInt,
  contractAddress: Address,
  offerBy: Address,
  amount: BigInt
): WithDrawRefundAmount {
  let withDrawRefundAmountEvent = changetype<WithDrawRefundAmount>(
    newMockEvent()
  )

  withDrawRefundAmountEvent.parameters = new Array()

  withDrawRefundAmountEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  withDrawRefundAmountEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )
  withDrawRefundAmountEvent.parameters.push(
    new ethereum.EventParam("offerBy", ethereum.Value.fromAddress(offerBy))
  )
  withDrawRefundAmountEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withDrawRefundAmountEvent
}
