import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QDateTimeOffsetPath,
  QBooleanPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuitParty } from "../lawsuit_party/QLawsuitParty";
import { QInsurancePolicy } from "../insurance_policy/QInsurancePolicy";
import { QNegotiation } from "../negotiation/QNegotiation";
import { QInsuranceClaimDemand } from "../insurance_claim_demand/QInsuranceClaimDemand";
import { QPIP } from "../pip/QPIP";
import { QPIPBenefit } from "../pip_benefit/QPIPBenefit";
import { QPropertyDamage } from "../property_damage/QPropertyDamage";
import { QSettlementItem } from "../settlement_item/QSettlementItem";
import { InsuranceClaimId } from "./InsuranceClaim";

export class QInsuranceClaim extends QueryObject {
  public readonly InsuranceClaimId = new QNumberPath(
    this.withPrefix("InsuranceClaimId")
  );
  public readonly InsurancePolicyId = new QNumberPath(
    this.withPrefix("InsurancePolicyId")
  );
  public readonly InsuranceAdjusterLawsuitPartyId = new QNumberPath(
    this.withPrefix("InsuranceAdjusterLawsuitPartyId")
  );
  public readonly ClaimNumber = new QStringPath(this.withPrefix("ClaimNumber"));
  public readonly MedPayPerPerson = new QNumberPath(
    this.withPrefix("MedPayPerPerson")
  );
  public readonly UnderInsuredMotorist = new QNumberPath(
    this.withPrefix("UnderInsuredMotorist")
  );
  public readonly UninsuredMotorist = new QNumberPath(
    this.withPrefix("UninsuredMotorist")
  );
  public readonly InsuranceCompanyCalledDate = new QDateTimeOffsetPath(
    this.withPrefix("InsuranceCompanyCalledDate")
  );
  public readonly RepresentationLtr1SentDate = new QDateTimeOffsetPath(
    this.withPrefix("RepresentationLtr1SentDate")
  );
  public readonly RepresentationLtr2SentDate = new QDateTimeOffsetPath(
    this.withPrefix("RepresentationLtr2SentDate")
  );
  public readonly InsuranceInfoReceivedDate = new QDateTimeOffsetPath(
    this.withPrefix("InsuranceInfoReceivedDate")
  );
  public readonly ClaimNotes = new QStringPath(this.withPrefix("ClaimNotes"));
  public readonly IsDeleted = new QBooleanPath(this.withPrefix("IsDeleted"));
  public readonly BodilyInjuryLiabilityPerPerson = new QNumberPath(
    this.withPrefix("BodilyInjuryLiabilityPerPerson")
  );
  public readonly BodilyInjuryLiabilityPerAccident = new QNumberPath(
    this.withPrefix("BodilyInjuryLiabilityPerAccident")
  );
  public readonly Dwelling = new QNumberPath(this.withPrefix("Dwelling"));
  public readonly OtherStructures = new QNumberPath(
    this.withPrefix("OtherStructures")
  );
  public readonly PersonalProperty = new QNumberPath(
    this.withPrefix("PersonalProperty")
  );
  public readonly LossofUse = new QNumberPath(this.withPrefix("LossofUse"));
  public readonly OtherCoverage = new QNumberPath(
    this.withPrefix("OtherCoverage")
  );
  public readonly InsuranceAdjuster = new QEntityPath(
    this.withPrefix("InsuranceAdjuster"),
    () => QLawsuitParty
  );
  public readonly InsurancePolicy = new QEntityPath(
    this.withPrefix("InsurancePolicy"),
    () => QInsurancePolicy
  );
  public readonly Negotiations = new QEntityCollectionPath(
    this.withPrefix("Negotiations"),
    () => QNegotiation
  );
  public readonly InsuranceClaimDemands = new QEntityCollectionPath(
    this.withPrefix("InsuranceClaimDemands"),
    () => QInsuranceClaimDemand
  );
  public readonly PIPs = new QEntityCollectionPath(
    this.withPrefix("PIPs"),
    () => QPIP
  );
  public readonly PIPBenefits = new QEntityCollectionPath(
    this.withPrefix("PIPBenefits"),
    () => QPIPBenefit
  );
  public readonly PropertyDamages = new QEntityCollectionPath(
    this.withPrefix("PropertyDamages"),
    () => QPropertyDamage
  );
  public readonly SettlementItems = new QEntityCollectionPath(
    this.withPrefix("SettlementItems"),
    () => QSettlementItem
  );
}

export const qInsuranceClaim = new QInsuranceClaim();

export class QInsuranceClaimId extends QId<InsuranceClaimId> {
  private readonly params = [new QNumberParam("InsuranceClaimId")];

  getParams() {
    return this.params;
  }
}
