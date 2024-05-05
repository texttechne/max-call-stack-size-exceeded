import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuitParty } from "../lawsuit_party/QLawsuitParty";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { InvestigatorId } from "./Investigator";

export class QInvestigator extends QueryObject {
  public readonly InvestigatorId = new QNumberPath(
    this.withPrefix("InvestigatorId")
  );
  public readonly InvestigatorLawsuitPartyId = new QNumberPath(
    this.withPrefix("InvestigatorLawsuitPartyId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly Cost = new QNumberPath(this.withPrefix("Cost"));
  public readonly Notes = new QStringPath(this.withPrefix("Notes"));
  public readonly InvestigatorLawsuitParty = new QEntityPath(
    this.withPrefix("InvestigatorLawsuitParty"),
    () => QLawsuitParty
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
}

export const qInvestigator = new QInvestigator();

export class QInvestigatorId extends QId<InvestigatorId> {
  private readonly params = [new QNumberParam("InvestigatorId")];

  getParams() {
    return this.params;
  }
}
