import {
  QueryObject,
  QNumberPath,
  QDateTimeOffsetPath,
  QBooleanPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QParty } from "../party/QParty";
import { QLawsuitParty } from "../lawsuit_party/QLawsuitParty";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { EconomicLossId } from "./EconomicLoss";

export class QEconomicLoss extends QueryObject {
  public readonly EconomicLossID = new QNumberPath(
    this.withPrefix("EconomicLossID")
  );
  public readonly LawsuitID = new QNumberPath(this.withPrefix("LawsuitID"));
  public readonly PlaintiffPartyID = new QNumberPath(
    this.withPrefix("PlaintiffPartyID")
  );
  public readonly EmployerLawsuitPartyID = new QNumberPath(
    this.withPrefix("EmployerLawsuitPartyID")
  );
  public readonly LostWages = new QNumberPath(this.withPrefix("LostWages"));
  public readonly LostWagesReq1SentDate = new QDateTimeOffsetPath(
    this.withPrefix("LostWagesReq1SentDate")
  );
  public readonly LostWagesReq2SentDate = new QDateTimeOffsetPath(
    this.withPrefix("LostWagesReq2SentDate")
  );
  public readonly LostWagesNeeded = new QBooleanPath(
    this.withPrefix("LostWagesNeeded")
  );
  public readonly LostWagesReceived = new QBooleanPath(
    this.withPrefix("LostWagesReceived")
  );
  public readonly LostWagesDateCalled = new QDateTimeOffsetPath(
    this.withPrefix("LostWagesDateCalled")
  );
  public readonly LostWagesIncludeInDemand = new QBooleanPath(
    this.withPrefix("LostWagesIncludeInDemand")
  );
  public readonly LostWagesWhileTreating = new QNumberPath(
    this.withPrefix("LostWagesWhileTreating")
  );
  public readonly LostWagesWhileTreatingIncludeInDemand = new QBooleanPath(
    this.withPrefix("LostWagesWhileTreatingIncludeInDemand")
  );
  public readonly LossOfOpportunity = new QNumberPath(
    this.withPrefix("LossOfOpportunity")
  );
  public readonly LossOfOpportunityReq1SentDate = new QDateTimeOffsetPath(
    this.withPrefix("LossOfOpportunityReq1SentDate")
  );
  public readonly LossOfOpportunityReq2SentDate = new QDateTimeOffsetPath(
    this.withPrefix("LossOfOpportunityReq2SentDate")
  );
  public readonly LossOfOpportunityDateCalled = new QDateTimeOffsetPath(
    this.withPrefix("LossOfOpportunityDateCalled")
  );
  public readonly LossOfOpportunityNeeded = new QBooleanPath(
    this.withPrefix("LossOfOpportunityNeeded")
  );
  public readonly LossOfOpportunityReceived = new QBooleanPath(
    this.withPrefix("LossOfOpportunityReceived")
  );
  public readonly LossOfOpportunityIncludeInDemand = new QBooleanPath(
    this.withPrefix("LossOfOpportunityIncludeInDemand")
  );
  public readonly LostWagesWhileTreatingNotes = new QStringPath(
    this.withPrefix("LostWagesWhileTreatingNotes")
  );
  public readonly Plaintiff = new QEntityPath(
    this.withPrefix("Plaintiff"),
    () => QParty
  );
  public readonly Employer = new QEntityPath(
    this.withPrefix("Employer"),
    () => QLawsuitParty
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
}

export const qEconomicLoss = new QEconomicLoss();

export class QEconomicLossId extends QId<EconomicLossId> {
  private readonly params = [new QNumberParam("EconomicLossID")];

  getParams() {
    return this.params;
  }
}
