import {
  QueryObject,
  QNumberPath,
  QBooleanPath,
  QStringPath,
  QDateTimeOffsetPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLaw } from "../law/QLaw";
import { QNegotiation } from "../negotiation/QNegotiation";
import { QCounterOffer } from "../counter_offer/QCounterOffer";
import { QDemandLineItem } from "../demand_line_item/QDemandLineItem";
import { QInsuranceClaimDemand } from "../insurance_claim_demand/QInsuranceClaimDemand";
import { DemandId } from "./Demand";

export class QDemand extends QueryObject {
  public readonly DemandId = new QNumberPath(this.withPrefix("DemandId"));
  public readonly NegotiationId = new QNumberPath(
    this.withPrefix("NegotiationId")
  );
  public readonly Accepted = new QBooleanPath(this.withPrefix("Accepted"));
  public readonly Active = new QBooleanPath(this.withPrefix("Active"));
  public readonly DemandLetterDocUrl = new QStringPath(
    this.withPrefix("DemandLetterDocUrl")
  );
  public readonly IntroductoryParagraph = new QStringPath(
    this.withPrefix("IntroductoryParagraph")
  );
  public readonly PersonalInformation = new QStringPath(
    this.withPrefix("PersonalInformation")
  );
  public readonly AccidentFacts = new QStringPath(
    this.withPrefix("AccidentFacts")
  );
  public readonly LiabilityLawId = new QNumberPath(
    this.withPrefix("LiabilityLawId")
  );
  public readonly LiabilityLawText = new QStringPath(
    this.withPrefix("LiabilityLawText")
  );
  public readonly IntangibleDamagesLawId = new QNumberPath(
    this.withPrefix("IntangibleDamagesLawId")
  );
  public readonly IntangibleDamagesLawText = new QStringPath(
    this.withPrefix("IntangibleDamagesLawText")
  );
  public readonly CourseOfTreatmentParagraph = new QStringPath(
    this.withPrefix("CourseOfTreatmentParagraph")
  );
  public readonly LossOfEarningsParagraph = new QStringPath(
    this.withPrefix("LossOfEarningsParagraph")
  );
  public readonly LostWagesLawId = new QNumberPath(
    this.withPrefix("LostWagesLawId")
  );
  public readonly LostWagesLawText = new QStringPath(
    this.withPrefix("LostWagesLawText")
  );
  public readonly CreatedAt = new QDateTimeOffsetPath(
    this.withPrefix("CreatedAt")
  );
  public readonly UpdatedAt = new QDateTimeOffsetPath(
    this.withPrefix("UpdatedAt")
  );
  public readonly ShortFlag = new QBooleanPath(this.withPrefix("ShortFlag"));
  public readonly IntangibleDamagesLaw = new QEntityPath(
    this.withPrefix("IntangibleDamagesLaw"),
    () => QLaw
  );
  public readonly LiabilityLaw = new QEntityPath(
    this.withPrefix("LiabilityLaw"),
    () => QLaw
  );
  public readonly LostWagesLaw = new QEntityPath(
    this.withPrefix("LostWagesLaw"),
    () => QLaw
  );
  public readonly Negotiation = new QEntityPath(
    this.withPrefix("Negotiation"),
    () => QNegotiation
  );
  public readonly CounterOffers = new QEntityCollectionPath(
    this.withPrefix("CounterOffers"),
    () => QCounterOffer
  );
  public readonly DemandLineItems = new QEntityCollectionPath(
    this.withPrefix("DemandLineItems"),
    () => QDemandLineItem
  );
  public readonly InsuranceClaimDemands = new QEntityCollectionPath(
    this.withPrefix("InsuranceClaimDemands"),
    () => QInsuranceClaimDemand
  );
}

export const qDemand = new QDemand();

export class QDemandId extends QId<DemandId> {
  private readonly params = [new QNumberParam("DemandId")];

  getParams() {
    return this.params;
  }
}
