import {
  QueryObject,
  QNumberPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuitParty } from "../lawsuit_party/QLawsuitParty";
import { DefendantAttorneyId } from "./DefendantAttorney";

export class QDefendantAttorney extends QueryObject {
  public readonly DefendantAttorneyID = new QNumberPath(
    this.withPrefix("DefendantAttorneyID")
  );
  public readonly DefendantLawsuitPartyID = new QNumberPath(
    this.withPrefix("DefendantLawsuitPartyID")
  );
  public readonly AttorneyLawsuitPartyID = new QNumberPath(
    this.withPrefix("AttorneyLawsuitPartyID")
  );
  public readonly Attorney = new QEntityPath(
    this.withPrefix("Attorney"),
    () => QLawsuitParty
  );
  public readonly Defendant = new QEntityPath(
    this.withPrefix("Defendant"),
    () => QLawsuitParty
  );
}

export const qDefendantAttorney = new QDefendantAttorney();

export class QDefendantAttorneyId extends QId<DefendantAttorneyId> {
  private readonly params = [new QNumberParam("DefendantAttorneyID")];

  getParams() {
    return this.params;
  }
}
