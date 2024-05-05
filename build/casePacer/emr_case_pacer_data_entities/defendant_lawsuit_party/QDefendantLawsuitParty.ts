import {
  QueryObject,
  QNumberPath,
  QDateTimeOffsetPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuitParty } from "../lawsuit_party/QLawsuitParty";
import { QDefendantLitigationAssn } from "../defendant_litigation_assn/QDefendantLitigationAssn";
import { DefendantLawsuitPartyId } from "./DefendantLawsuitParty";

export class QDefendantLawsuitParty extends QueryObject {
  public readonly DefendantLawsuitPartyId = new QNumberPath(
    this.withPrefix("DefendantLawsuitPartyId")
  );
  public readonly LawsuitPartyId = new QNumberPath(
    this.withPrefix("LawsuitPartyId")
  );
  public readonly RepLtr1SentDate = new QDateTimeOffsetPath(
    this.withPrefix("RepLtr1SentDate")
  );
  public readonly RepLtr2SentDate = new QDateTimeOffsetPath(
    this.withPrefix("RepLtr2SentDate")
  );
  public readonly ResponseRcvdDate = new QDateTimeOffsetPath(
    this.withPrefix("ResponseRcvdDate")
  );
  public readonly LawsuitParty = new QEntityPath(
    this.withPrefix("LawsuitParty"),
    () => QLawsuitParty
  );
  public readonly DefendantLitigationAssns = new QEntityCollectionPath(
    this.withPrefix("DefendantLitigationAssns"),
    () => QDefendantLitigationAssn
  );
}

export const qDefendantLawsuitParty = new QDefendantLawsuitParty();

export class QDefendantLawsuitPartyId extends QId<DefendantLawsuitPartyId> {
  private readonly params = [new QNumberParam("DefendantLawsuitPartyId")];

  getParams() {
    return this.params;
  }
}
