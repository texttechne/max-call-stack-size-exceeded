import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QAddressType } from "../address_type/QAddressType";
import { QCPDirectMedicalProvider } from "../cp_direct_medical_provider/QCPDirectMedicalProvider";
import { QPartyAddress } from "../party_address/QPartyAddress";
import { AddressId } from "./Address";

export class QAddress extends QueryObject {
  public readonly AddressId = new QNumberPath(this.withPrefix("AddressId"));
  public readonly AddressTypeId = new QNumberPath(
    this.withPrefix("AddressTypeId")
  );
  public readonly AddressLine1 = new QStringPath(
    this.withPrefix("AddressLine1")
  );
  public readonly AddressLine2 = new QStringPath(
    this.withPrefix("AddressLine2")
  );
  public readonly City = new QStringPath(this.withPrefix("City"));
  public readonly County = new QStringPath(this.withPrefix("County"));
  public readonly State = new QStringPath(this.withPrefix("State"));
  public readonly ZipCode = new QStringPath(this.withPrefix("ZipCode"));
  public readonly IsDeleted = new QBooleanPath(this.withPrefix("IsDeleted"));
  public readonly Country = new QStringPath(this.withPrefix("Country"));
  public readonly Description = new QStringPath(this.withPrefix("Description"));
  public readonly AddressType = new QEntityPath(
    this.withPrefix("AddressType"),
    () => QAddressType
  );
  public readonly CPDirectMedicalProviders = new QEntityCollectionPath(
    this.withPrefix("CPDirectMedicalProviders"),
    () => QCPDirectMedicalProvider
  );
  public readonly PartyAddresses = new QEntityCollectionPath(
    this.withPrefix("PartyAddresses"),
    () => QPartyAddress
  );
}

export const qAddress = new QAddress();

export class QAddressId extends QId<AddressId> {
  private readonly params = [new QNumberParam("AddressId")];

  getParams() {
    return this.params;
  }
}
