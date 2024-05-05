import {
  QueryObject,
  QNumberPath,
  QBooleanPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QAddress } from "../address/QAddress";
import { QParty } from "../party/QParty";
import { PartyAddressId } from "./PartyAddress";

export class QPartyAddress extends QueryObject {
  public readonly PartyAddressId = new QNumberPath(
    this.withPrefix("PartyAddressId")
  );
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly AddressId = new QNumberPath(this.withPrefix("AddressId"));
  public readonly IsPrimary = new QBooleanPath(this.withPrefix("IsPrimary"));
  public readonly QBAddrId = new QStringPath(this.withPrefix("QBAddrId"));
  public readonly Address = new QEntityPath(
    this.withPrefix("Address"),
    () => QAddress
  );
  public readonly Party = new QEntityPath(
    this.withPrefix("Party"),
    () => QParty
  );
}

export const qPartyAddress = new QPartyAddress();

export class QPartyAddressId extends QId<PartyAddressId> {
  private readonly params = [new QNumberParam("PartyAddressId")];

  getParams() {
    return this.params;
  }
}
