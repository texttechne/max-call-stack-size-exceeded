import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QAddress } from "../address/QAddress";
import { AddressTypeId } from "./AddressType";

export class QAddressType extends QueryObject {
  public readonly AddressTypeId = new QNumberPath(
    this.withPrefix("AddressTypeId")
  );
  public readonly AddressTypeName = new QStringPath(
    this.withPrefix("AddressTypeName")
  );
  public readonly Addresses = new QEntityCollectionPath(
    this.withPrefix("Addresses"),
    () => QAddress
  );
}

export const qAddressType = new QAddressType();

export class QAddressTypeId extends QId<AddressTypeId> {
  private readonly params = [new QNumberParam("AddressTypeId")];

  getParams() {
    return this.params;
  }
}
