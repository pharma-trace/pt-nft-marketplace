// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CollectionWhitelisted extends ethereum.Event {
  get params(): CollectionWhitelisted__Params {
    return new CollectionWhitelisted__Params(this);
  }
}

export class CollectionWhitelisted__Params {
  _event: CollectionWhitelisted;

  constructor(event: CollectionWhitelisted) {
    this._event = event;
  }

  get collection(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class CurrencyWhitelisted extends ethereum.Event {
  get params(): CurrencyWhitelisted__Params {
    return new CurrencyWhitelisted__Params(this);
  }
}

export class CurrencyWhitelisted__Params {
  _event: CurrencyWhitelisted;

  constructor(event: CurrencyWhitelisted) {
    this._event = event;
  }

  get currency(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get addOrRemove(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class FeePercentUpadated extends ethereum.Event {
  get params(): FeePercentUpadated__Params {
    return new FeePercentUpadated__Params(this);
  }
}

export class FeePercentUpadated__Params {
  _event: FeePercentUpadated;

  constructor(event: FeePercentUpadated) {
    this._event = event;
  }

  get newFeePercent(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ItemBought extends ethereum.Event {
  get params(): ItemBought__Params {
    return new ItemBought__Params(this);
  }
}

export class ItemBought__Params {
  _event: ItemBought;

  constructor(event: ItemBought) {
    this._event = event;
  }

  get collection(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get buyer(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get isVoucher(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }
}

export class ItemListed extends ethereum.Event {
  get params(): ItemListed__Params {
    return new ItemListed__Params(this);
  }
}

export class ItemListed__Params {
  _event: ItemListed;

  constructor(event: ItemListed) {
    this._event = event;
  }

  get collection(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get currency(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get minPrice(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get expiry(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get isFixedPrice(): boolean {
    return this._event.parameters[6].value.toBoolean();
  }
}

export class ItemUnlisted extends ethereum.Event {
  get params(): ItemUnlisted__Params {
    return new ItemUnlisted__Params(this);
  }
}

export class ItemUnlisted__Params {
  _event: ItemUnlisted;

  constructor(event: ItemUnlisted) {
    this._event = event;
  }

  get collection(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OfferAccepted extends ethereum.Event {
  get params(): OfferAccepted__Params {
    return new OfferAccepted__Params(this);
  }
}

export class OfferAccepted__Params {
  _event: OfferAccepted;

  constructor(event: OfferAccepted) {
    this._event = event;
  }

  get collection(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get buyer(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class OfferCreated extends ethereum.Event {
  get params(): OfferCreated__Params {
    return new OfferCreated__Params(this);
  }
}

export class OfferCreated__Params {
  _event: OfferCreated;

  constructor(event: OfferCreated) {
    this._event = event;
  }

  get collection(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get buyer(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get offerPrice(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get isVoucher(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }
}

export class OfferRejected extends ethereum.Event {
  get params(): OfferRejected__Params {
    return new OfferRejected__Params(this);
  }
}

export class OfferRejected__Params {
  _event: OfferRejected;

  constructor(event: OfferRejected) {
    this._event = event;
  }

  get collection(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get buyer(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class OfferWithdrawn extends ethereum.Event {
  get params(): OfferWithdrawn__Params {
    return new OfferWithdrawn__Params(this);
  }
}

export class OfferWithdrawn__Params {
  _event: OfferWithdrawn;

  constructor(event: OfferWithdrawn) {
    this._event = event;
  }

  get collection(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TradeExecuted extends ethereum.Event {
  get params(): TradeExecuted__Params {
    return new TradeExecuted__Params(this);
  }
}

export class TradeExecuted__Params {
  _event: TradeExecuted;

  constructor(event: TradeExecuted) {
    this._event = event;
  }

  get collection(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get buyer(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get currency(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get isVoucher(): boolean {
    return this._event.parameters[6].value.toBoolean();
  }
}

export class VoucherWritten extends ethereum.Event {
  get params(): VoucherWritten__Params {
    return new VoucherWritten__Params(this);
  }
}

export class VoucherWritten__Params {
  _event: VoucherWritten;

  constructor(event: VoucherWritten) {
    this._event = event;
  }

  get collection(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get uri(): string {
    return this._event.parameters[2].value.toString();
  }

  get currency(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get signature(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }
}

export class PTMarket__marketItemsResult {
  value0: Address;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: boolean;

  constructor(
    value0: Address,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    return map;
  }

  getSeller(): Address {
    return this.value0;
  }

  getCurrency(): Address {
    return this.value1;
  }

  getMinPrice(): BigInt {
    return this.value2;
  }

  getExpiry(): BigInt {
    return this.value3;
  }

  getIsFixedPrice(): boolean {
    return this.value4;
  }
}

export class PTMarket__offersResult {
  value0: Address;
  value1: BigInt;
  value2: boolean;

  constructor(value0: Address, value1: BigInt, value2: boolean) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromBoolean(this.value2));
    return map;
  }

  getBuyer(): Address {
    return this.value0;
  }

  getOfferPrice(): BigInt {
    return this.value1;
  }

  getIsVoucher(): boolean {
    return this.value2;
  }
}

export class PTMarket extends ethereum.SmartContract {
  static bind(address: Address): PTMarket {
    return new PTMarket("PTMarket", address);
  }

  currencyList(param0: Address): boolean {
    let result = super.call("currencyList", "currencyList(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_currencyList(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("currencyList", "currencyList(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  feePercent(): BigInt {
    let result = super.call("feePercent", "feePercent():(uint256)", []);

    return result[0].toBigInt();
  }

  try_feePercent(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("feePercent", "feePercent():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  marketItems(param0: Address, param1: BigInt): PTMarket__marketItemsResult {
    let result = super.call(
      "marketItems",
      "marketItems(address,uint256):(address,address,uint256,uint256,bool)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new PTMarket__marketItemsResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBoolean()
    );
  }

  try_marketItems(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<PTMarket__marketItemsResult> {
    let result = super.tryCall(
      "marketItems",
      "marketItems(address,uint256):(address,address,uint256,uint256,bool)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PTMarket__marketItemsResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBoolean()
      )
    );
  }

  offers(param0: Address, param1: BigInt): PTMarket__offersResult {
    let result = super.call(
      "offers",
      "offers(address,uint256):(address,uint256,bool)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new PTMarket__offersResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBoolean()
    );
  }

  try_offers(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<PTMarket__offersResult> {
    let result = super.tryCall(
      "offers",
      "offers(address,uint256):(address,uint256,bool)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PTMarket__offersResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBoolean()
      )
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptOfferCall extends ethereum.Call {
  get inputs(): AcceptOfferCall__Inputs {
    return new AcceptOfferCall__Inputs(this);
  }

  get outputs(): AcceptOfferCall__Outputs {
    return new AcceptOfferCall__Outputs(this);
  }
}

export class AcceptOfferCall__Inputs {
  _call: AcceptOfferCall;

  constructor(call: AcceptOfferCall) {
    this._call = call;
  }

  get collection(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get acceptOrReject(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class AcceptOfferCall__Outputs {
  _call: AcceptOfferCall;

  constructor(call: AcceptOfferCall) {
    this._call = call;
  }
}

export class BuyItemCall extends ethereum.Call {
  get inputs(): BuyItemCall__Inputs {
    return new BuyItemCall__Inputs(this);
  }

  get outputs(): BuyItemCall__Outputs {
    return new BuyItemCall__Outputs(this);
  }
}

export class BuyItemCall__Inputs {
  _call: BuyItemCall;

  constructor(call: BuyItemCall) {
    this._call = call;
  }

  get collection(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BuyItemCall__Outputs {
  _call: BuyItemCall;

  constructor(call: BuyItemCall) {
    this._call = call;
  }
}

export class BuyLazzNFTCall extends ethereum.Call {
  get inputs(): BuyLazzNFTCall__Inputs {
    return new BuyLazzNFTCall__Inputs(this);
  }

  get outputs(): BuyLazzNFTCall__Outputs {
    return new BuyLazzNFTCall__Outputs(this);
  }
}

export class BuyLazzNFTCall__Inputs {
  _call: BuyLazzNFTCall;

  constructor(call: BuyLazzNFTCall) {
    this._call = call;
  }

  get collection(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get voucher(): BuyLazzNFTCallVoucherStruct {
    return changetype<BuyLazzNFTCallVoucherStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }
}

export class BuyLazzNFTCall__Outputs {
  _call: BuyLazzNFTCall;

  constructor(call: BuyLazzNFTCall) {
    this._call = call;
  }
}

export class BuyLazzNFTCallVoucherStruct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get uri(): string {
    return this[1].toString();
  }

  get currency(): Address {
    return this[2].toAddress();
  }

  get minPrice(): BigInt {
    return this[3].toBigInt();
  }

  get isFixedPrice(): boolean {
    return this[4].toBoolean();
  }

  get signature(): Bytes {
    return this[5].toBytes();
  }
}

export class CreateLazzOfferCall extends ethereum.Call {
  get inputs(): CreateLazzOfferCall__Inputs {
    return new CreateLazzOfferCall__Inputs(this);
  }

  get outputs(): CreateLazzOfferCall__Outputs {
    return new CreateLazzOfferCall__Outputs(this);
  }
}

export class CreateLazzOfferCall__Inputs {
  _call: CreateLazzOfferCall;

  constructor(call: CreateLazzOfferCall) {
    this._call = call;
  }

  get collection(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get voucher(): CreateLazzOfferCallVoucherStruct {
    return changetype<CreateLazzOfferCallVoucherStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }

  get offerPrice(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CreateLazzOfferCall__Outputs {
  _call: CreateLazzOfferCall;

  constructor(call: CreateLazzOfferCall) {
    this._call = call;
  }
}

export class CreateLazzOfferCallVoucherStruct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get uri(): string {
    return this[1].toString();
  }

  get currency(): Address {
    return this[2].toAddress();
  }

  get minPrice(): BigInt {
    return this[3].toBigInt();
  }

  get isFixedPrice(): boolean {
    return this[4].toBoolean();
  }

  get signature(): Bytes {
    return this[5].toBytes();
  }
}

export class CreateOfferCall extends ethereum.Call {
  get inputs(): CreateOfferCall__Inputs {
    return new CreateOfferCall__Inputs(this);
  }

  get outputs(): CreateOfferCall__Outputs {
    return new CreateOfferCall__Outputs(this);
  }
}

export class CreateOfferCall__Inputs {
  _call: CreateOfferCall;

  constructor(call: CreateOfferCall) {
    this._call = call;
  }

  get collection(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get offerPrice(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CreateOfferCall__Outputs {
  _call: CreateOfferCall;

  constructor(call: CreateOfferCall) {
    this._call = call;
  }
}

export class ListItemCall extends ethereum.Call {
  get inputs(): ListItemCall__Inputs {
    return new ListItemCall__Inputs(this);
  }

  get outputs(): ListItemCall__Outputs {
    return new ListItemCall__Outputs(this);
  }
}

export class ListItemCall__Inputs {
  _call: ListItemCall;

  constructor(call: ListItemCall) {
    this._call = call;
  }

  get collection(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get currency(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get minPrice(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get expiresAt(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get isFixedPrice(): boolean {
    return this._call.inputValues[5].value.toBoolean();
  }
}

export class ListItemCall__Outputs {
  _call: ListItemCall;

  constructor(call: ListItemCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetFeePercentCall extends ethereum.Call {
  get inputs(): SetFeePercentCall__Inputs {
    return new SetFeePercentCall__Inputs(this);
  }

  get outputs(): SetFeePercentCall__Outputs {
    return new SetFeePercentCall__Outputs(this);
  }
}

export class SetFeePercentCall__Inputs {
  _call: SetFeePercentCall;

  constructor(call: SetFeePercentCall) {
    this._call = call;
  }

  get newFeePercent(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFeePercentCall__Outputs {
  _call: SetFeePercentCall;

  constructor(call: SetFeePercentCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnlistItemCall extends ethereum.Call {
  get inputs(): UnlistItemCall__Inputs {
    return new UnlistItemCall__Inputs(this);
  }

  get outputs(): UnlistItemCall__Outputs {
    return new UnlistItemCall__Outputs(this);
  }
}

export class UnlistItemCall__Inputs {
  _call: UnlistItemCall;

  constructor(call: UnlistItemCall) {
    this._call = call;
  }

  get collection(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UnlistItemCall__Outputs {
  _call: UnlistItemCall;

  constructor(call: UnlistItemCall) {
    this._call = call;
  }
}

export class WhitelistCollectionCall extends ethereum.Call {
  get inputs(): WhitelistCollectionCall__Inputs {
    return new WhitelistCollectionCall__Inputs(this);
  }

  get outputs(): WhitelistCollectionCall__Outputs {
    return new WhitelistCollectionCall__Outputs(this);
  }
}

export class WhitelistCollectionCall__Inputs {
  _call: WhitelistCollectionCall;

  constructor(call: WhitelistCollectionCall) {
    this._call = call;
  }

  get collection(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WhitelistCollectionCall__Outputs {
  _call: WhitelistCollectionCall;

  constructor(call: WhitelistCollectionCall) {
    this._call = call;
  }
}

export class WhitelistCurrencyCall extends ethereum.Call {
  get inputs(): WhitelistCurrencyCall__Inputs {
    return new WhitelistCurrencyCall__Inputs(this);
  }

  get outputs(): WhitelistCurrencyCall__Outputs {
    return new WhitelistCurrencyCall__Outputs(this);
  }
}

export class WhitelistCurrencyCall__Inputs {
  _call: WhitelistCurrencyCall;

  constructor(call: WhitelistCurrencyCall) {
    this._call = call;
  }

  get currency(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addOrRemove(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class WhitelistCurrencyCall__Outputs {
  _call: WhitelistCurrencyCall;

  constructor(call: WhitelistCurrencyCall) {
    this._call = call;
  }
}

export class WithdrawOfferCall extends ethereum.Call {
  get inputs(): WithdrawOfferCall__Inputs {
    return new WithdrawOfferCall__Inputs(this);
  }

  get outputs(): WithdrawOfferCall__Outputs {
    return new WithdrawOfferCall__Outputs(this);
  }
}

export class WithdrawOfferCall__Inputs {
  _call: WithdrawOfferCall;

  constructor(call: WithdrawOfferCall) {
    this._call = call;
  }

  get collection(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawOfferCall__Outputs {
  _call: WithdrawOfferCall;

  constructor(call: WithdrawOfferCall) {
    this._call = call;
  }
}
