import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QDateTimeOffsetPath,
  QBooleanPath,
  QEntityPath,
  QId,
  QNumberParam,
  QFunction,
  OperationReturnType,
  ReturnTypes,
  QComplexParam,
} from "@odata2ts/odata-query-objects";
import { QParty } from "../party/QParty";
import { PartySummaryId, PartySummary_ListParams } from "./PartySummary";

export class QPartySummary extends QueryObject {
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly DisplayName = new QStringPath(this.withPrefix("DisplayName"));
  public readonly FirstName = new QStringPath(this.withPrefix("FirstName"));
  public readonly LastName = new QStringPath(this.withPrefix("LastName"));
  public readonly DateOfBirth = new QDateTimeOffsetPath(
    this.withPrefix("DateOfBirth")
  );
  public readonly CompanyName = new QStringPath(this.withPrefix("CompanyName"));
  public readonly SearchName = new QStringPath(this.withPrefix("SearchName"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly QuickEntry = new QBooleanPath(this.withPrefix("QuickEntry"));
  public readonly PartyTypeName = new QStringPath(
    this.withPrefix("PartyTypeName")
  );
  public readonly AddressTypeId = new QNumberPath(
    this.withPrefix("AddressTypeId")
  );
  public readonly AddressTypeName = new QStringPath(
    this.withPrefix("AddressTypeName")
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
  public readonly Country = new QStringPath(this.withPrefix("Country"));
  public readonly PhoneNumber = new QStringPath(this.withPrefix("PhoneNumber"));
  public readonly FaxNumber = new QStringPath(this.withPrefix("FaxNumber"));
  public readonly EmailAddress = new QStringPath(
    this.withPrefix("EmailAddress")
  );
  public readonly NumLawsuits = new QNumberPath(this.withPrefix("NumLawsuits"));
  public readonly Party = new QEntityPath(
    this.withPrefix("Party"),
    () => QParty
  );
}

export const qPartySummary = new QPartySummary();

export class QPartySummaryId extends QId<PartySummaryId> {
  private readonly params = [new QNumberParam("PartyId")];

  getParams() {
    return this.params;
  }
}

export class PartySummary_QList extends QFunction<PartySummary_ListParams> {
  private readonly params = [new QNumberParam("ids")];

  constructor() {
    super(
      "Default.List",
      new OperationReturnType(
        ReturnTypes.COMPLEX_COLLECTION,
        new QComplexParam("NONE", new QPartySummary())
      )
    );
  }

  getParams() {
    return this.params;
  }
}
