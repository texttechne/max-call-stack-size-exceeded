import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QAttorneyFeeInterest } from "../attorney_fee_interest/QAttorneyFeeInterest";
import { AttorneyFeeInterestTypeId } from "./AttorneyFeeInterestType";

export class QAttorneyFeeInterestType extends QueryObject {
  public readonly AttorneyFeeInterestTypeId = new QNumberPath(
    this.withPrefix("AttorneyFeeInterestTypeId")
  );
  public readonly AttorneyFeeInterestTypeName = new QStringPath(
    this.withPrefix("AttorneyFeeInterestTypeName")
  );
  public readonly AttorneyFeeInterests = new QEntityCollectionPath(
    this.withPrefix("AttorneyFeeInterests"),
    () => QAttorneyFeeInterest
  );
}

export const qAttorneyFeeInterestType = new QAttorneyFeeInterestType();

export class QAttorneyFeeInterestTypeId extends QId<AttorneyFeeInterestTypeId> {
  private readonly params = [new QNumberParam("AttorneyFeeInterestTypeId")];

  getParams() {
    return this.params;
  }
}
