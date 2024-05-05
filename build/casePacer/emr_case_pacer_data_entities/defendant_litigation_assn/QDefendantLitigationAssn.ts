import {
  QueryObject,
  QNumberPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QDefendantLawsuitParty } from "../defendant_lawsuit_party/QDefendantLawsuitParty";
import { QLitigation } from "../litigation/QLitigation";
import { DefendantLitigationAssnId } from "./DefendantLitigationAssn";

export class QDefendantLitigationAssn extends QueryObject {
  public readonly DefendantLitigationAssnId = new QNumberPath(
    this.withPrefix("DefendantLitigationAssnId")
  );
  public readonly DefendantLawsuitPartyId = new QNumberPath(
    this.withPrefix("DefendantLawsuitPartyId")
  );
  public readonly LitigationId = new QNumberPath(
    this.withPrefix("LitigationId")
  );
  public readonly DefendantLawsuitParty = new QEntityPath(
    this.withPrefix("DefendantLawsuitParty"),
    () => QDefendantLawsuitParty
  );
  public readonly Litigation = new QEntityPath(
    this.withPrefix("Litigation"),
    () => QLitigation
  );
}

export const qDefendantLitigationAssn = new QDefendantLitigationAssn();

export class QDefendantLitigationAssnId extends QId<DefendantLitigationAssnId> {
  private readonly params = [new QNumberParam("DefendantLitigationAssnId")];

  getParams() {
    return this.params;
  }
}
