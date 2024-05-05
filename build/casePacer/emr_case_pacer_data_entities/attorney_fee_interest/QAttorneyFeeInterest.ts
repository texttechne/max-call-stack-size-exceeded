import {
  QueryObject,
  QNumberPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QAttorneyFeeInterestType } from "../attorney_fee_interest_type/QAttorneyFeeInterestType";
import { QLawsuitParty } from "../lawsuit_party/QLawsuitParty";
import { AttorneyFeeInterestId } from "./AttorneyFeeInterest";

export class QAttorneyFeeInterest extends QueryObject {
  public readonly LawsuitPartyId = new QNumberPath(
    this.withPrefix("LawsuitPartyId")
  );
  public readonly AttorneyFeeInterestTypeId = new QNumberPath(
    this.withPrefix("AttorneyFeeInterestTypeId")
  );
  public readonly AttorneyFeeInterestValue = new QNumberPath(
    this.withPrefix("AttorneyFeeInterestValue")
  );
  public readonly AttorneyFeeInterestType = new QEntityPath(
    this.withPrefix("AttorneyFeeInterestType"),
    () => QAttorneyFeeInterestType
  );
  public readonly LawsuitParty = new QEntityPath(
    this.withPrefix("LawsuitParty"),
    () => QLawsuitParty
  );
}

export const qAttorneyFeeInterest = new QAttorneyFeeInterest();

export class QAttorneyFeeInterestId extends QId<AttorneyFeeInterestId> {
  private readonly params = [new QNumberParam("LawsuitPartyId")];

  getParams() {
    return this.params;
  }
}
