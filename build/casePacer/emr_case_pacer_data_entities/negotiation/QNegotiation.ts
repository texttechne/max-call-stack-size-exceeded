import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QDateTimeOffsetPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QInsuranceClaim } from "../insurance_claim/QInsuranceClaim";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QDemand } from "../demand/QDemand";
import { NegotiationId } from "./Negotiation";

export class QNegotiation extends QueryObject {
  public readonly NegotiationId = new QNumberPath(
    this.withPrefix("NegotiationId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly NegotiationNotes = new QStringPath(
    this.withPrefix("NegotiationNotes")
  );
  public readonly LitigationThreatSentDate = new QDateTimeOffsetPath(
    this.withPrefix("LitigationThreatSentDate")
  );
  public readonly DemandSentDate = new QDateTimeOffsetPath(
    this.withPrefix("DemandSentDate")
  );
  public readonly InsuranceClaimId = new QNumberPath(
    this.withPrefix("InsuranceClaimId")
  );
  public readonly CounterOfferSentDate = new QDateTimeOffsetPath(
    this.withPrefix("CounterOfferSentDate")
  );
  public readonly InsuranceClaim = new QEntityPath(
    this.withPrefix("InsuranceClaim"),
    () => QInsuranceClaim
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly Demands = new QEntityCollectionPath(
    this.withPrefix("Demands"),
    () => QDemand
  );
}

export const qNegotiation = new QNegotiation();

export class QNegotiationId extends QId<NegotiationId> {
  private readonly params = [new QNumberParam("NegotiationId")];

  getParams() {
    return this.params;
  }
}
