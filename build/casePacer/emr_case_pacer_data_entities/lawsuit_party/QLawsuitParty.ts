import {
  QueryObject,
  QNumberPath,
  QBooleanPath,
  QStringPath,
  QEntityCollectionPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QInsuranceClaim } from "../insurance_claim/QInsuranceClaim";
import { QLitigation } from "../litigation/QLitigation";
import { QADR } from "../adr/QADR";
import { QDeposition } from "../deposition/QDeposition";
import { QExpense } from "../expense/QExpense";
import { QLienSubrogation } from "../lien_subrogation/QLienSubrogation";
import { QMedicalProvider } from "../medical_provider/QMedicalProvider";
import { QPropertyDamage } from "../property_damage/QPropertyDamage";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QLawsuitPartyType } from "../lawsuit_party_type/QLawsuitPartyType";
import { QParty } from "../party/QParty";
import { QAttorneyFeeInterest } from "../attorney_fee_interest/QAttorneyFeeInterest";
import { QDefendantAttorney } from "../defendant_attorney/QDefendantAttorney";
import { QDefendantLawsuitParty } from "../defendant_lawsuit_party/QDefendantLawsuitParty";
import { QEconomicLoss } from "../economic_loss/QEconomicLoss";
import { QInsurancePolicy } from "../insurance_policy/QInsurancePolicy";
import { QInvestigator } from "../investigator/QInvestigator";
import { QLawsuitRole } from "../lawsuit_role/QLawsuitRole";
import { QMedicalEvaluation } from "../medical_evaluation/QMedicalEvaluation";
import { QPIPBenefit } from "../pip_benefit/QPIPBenefit";
import { QPlaintiffLawsuitParty } from "../plaintiff_lawsuit_party/QPlaintiffLawsuitParty";
import { QPoliceReport } from "../police_report/QPoliceReport";
import { QTickler } from "../tickler/QTickler";
import { QWitness } from "../witness/QWitness";
import { LawsuitPartyId } from "./LawsuitParty";

export class QLawsuitParty extends QueryObject {
  public readonly LawsuitPartyId = new QNumberPath(
    this.withPrefix("LawsuitPartyId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly LawsuitPartyTypeId = new QNumberPath(
    this.withPrefix("LawsuitPartyTypeId")
  );
  public readonly PrimaryFlag = new QBooleanPath(
    this.withPrefix("PrimaryFlag")
  );
  public readonly ActiveFlag = new QBooleanPath(this.withPrefix("ActiveFlag"));
  public readonly BillableRate = new QNumberPath(
    this.withPrefix("BillableRate")
  );
  public readonly Notes = new QStringPath(this.withPrefix("Notes"));
  public readonly SubType = new QStringPath(this.withPrefix("SubType"));
  public readonly ClientFlag = new QBooleanPath(this.withPrefix("ClientFlag"));
  public readonly InsuranceClaimsByCompany = new QEntityCollectionPath(
    this.withPrefix("InsuranceClaimsByCompany"),
    () => QInsuranceClaim
  );
  public readonly InsuranceClaimsByInsured = new QEntityCollectionPath(
    this.withPrefix("InsuranceClaimsByInsured"),
    () => QInsuranceClaim
  );
  public readonly InsuranceClaimsByTiedTo = new QEntityCollectionPath(
    this.withPrefix("InsuranceClaimsByTiedTo"),
    () => QInsuranceClaim
  );
  public readonly CourtLitigations = new QEntityCollectionPath(
    this.withPrefix("CourtLitigations"),
    () => QLitigation
  );
  public readonly JudgeLitigations = new QEntityCollectionPath(
    this.withPrefix("JudgeLitigations"),
    () => QLitigation
  );
  public readonly ADRs = new QEntityCollectionPath(
    this.withPrefix("ADRs"),
    () => QADR
  );
  public readonly DeponentDepositions = new QEntityCollectionPath(
    this.withPrefix("DeponentDepositions"),
    () => QDeposition
  );
  public readonly DeposerDepositions = new QEntityCollectionPath(
    this.withPrefix("DeposerDepositions"),
    () => QDeposition
  );
  public readonly RecorderDepositions = new QEntityCollectionPath(
    this.withPrefix("RecorderDepositions"),
    () => QDeposition
  );
  public readonly PayeeExpenses = new QEntityCollectionPath(
    this.withPrefix("PayeeExpenses"),
    () => QExpense
  );
  public readonly SubrogeeLienHolderLienSubrogations =
    new QEntityCollectionPath(
      this.withPrefix("SubrogeeLienHolderLienSubrogations"),
      () => QLienSubrogation
    );
  public readonly MedicalProviders = new QEntityCollectionPath(
    this.withPrefix("MedicalProviders"),
    () => QMedicalProvider
  );
  public readonly RepairCompanyPropertyDamages = new QEntityCollectionPath(
    this.withPrefix("RepairCompanyPropertyDamages"),
    () => QPropertyDamage
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly LawsuitPartyType = new QEntityPath(
    this.withPrefix("LawsuitPartyType"),
    () => QLawsuitPartyType
  );
  public readonly Party = new QEntityPath(
    this.withPrefix("Party"),
    () => QParty
  );
  public readonly AttorneyFeeInterest = new QEntityPath(
    this.withPrefix("AttorneyFeeInterest"),
    () => QAttorneyFeeInterest
  );
  public readonly Defendants = new QEntityCollectionPath(
    this.withPrefix("Defendants"),
    () => QDefendantAttorney
  );
  public readonly DefendantAttorneys = new QEntityCollectionPath(
    this.withPrefix("DefendantAttorneys"),
    () => QDefendantAttorney
  );
  public readonly DefendantLawsuitParties = new QEntityCollectionPath(
    this.withPrefix("DefendantLawsuitParties"),
    () => QDefendantLawsuitParty
  );
  public readonly EconomicLosses = new QEntityCollectionPath(
    this.withPrefix("EconomicLosses"),
    () => QEconomicLoss
  );
  public readonly InsuranceClaimsByAdjuster = new QEntityCollectionPath(
    this.withPrefix("InsuranceClaimsByAdjuster"),
    () => QInsuranceClaim
  );
  public readonly InsurancePoliciesByCompany = new QEntityCollectionPath(
    this.withPrefix("InsurancePoliciesByCompany"),
    () => QInsurancePolicy
  );
  public readonly InsurancePoliciesByInsured = new QEntityCollectionPath(
    this.withPrefix("InsurancePoliciesByInsured"),
    () => QInsurancePolicy
  );
  public readonly InsurancePoliciesByTiedTo = new QEntityCollectionPath(
    this.withPrefix("InsurancePoliciesByTiedTo"),
    () => QInsurancePolicy
  );
  public readonly Investigators = new QEntityCollectionPath(
    this.withPrefix("Investigators"),
    () => QInvestigator
  );
  public readonly LawsuitRoles = new QEntityCollectionPath(
    this.withPrefix("LawsuitRoles"),
    () => QLawsuitRole
  );
  public readonly MedicalEvaluationsByDoctor = new QEntityCollectionPath(
    this.withPrefix("MedicalEvaluationsByDoctor"),
    () => QMedicalEvaluation
  );
  public readonly MedicalEvaluationsByPrepBy = new QEntityCollectionPath(
    this.withPrefix("MedicalEvaluationsByPrepBy"),
    () => QMedicalEvaluation
  );
  public readonly MedicalEvaluationsByRequestor = new QEntityCollectionPath(
    this.withPrefix("MedicalEvaluationsByRequestor"),
    () => QMedicalEvaluation
  );
  public readonly PIPBenefits = new QEntityCollectionPath(
    this.withPrefix("PIPBenefits"),
    () => QPIPBenefit
  );
  public readonly PlaintiffLawsuitParties = new QEntityCollectionPath(
    this.withPrefix("PlaintiffLawsuitParties"),
    () => QPlaintiffLawsuitParty
  );
  public readonly PoliceReports = new QEntityCollectionPath(
    this.withPrefix("PoliceReports"),
    () => QPoliceReport
  );
  public readonly AdjusterPropertyDamages = new QEntityCollectionPath(
    this.withPrefix("AdjusterPropertyDamages"),
    () => QPropertyDamage
  );
  public readonly CompanyPropertyDamages = new QEntityCollectionPath(
    this.withPrefix("CompanyPropertyDamages"),
    () => QPropertyDamage
  );
  public readonly PlaintiffPropertyDamages = new QEntityCollectionPath(
    this.withPrefix("PlaintiffPropertyDamages"),
    () => QPropertyDamage
  );
  public readonly Ticklers = new QEntityCollectionPath(
    this.withPrefix("Ticklers"),
    () => QTickler
  );
  public readonly Witness = new QEntityPath(
    this.withPrefix("Witness"),
    () => QWitness
  );
}

export const qLawsuitParty = new QLawsuitParty();

export class QLawsuitPartyId extends QId<LawsuitPartyId> {
  private readonly params = [new QNumberParam("LawsuitPartyId")];

  getParams() {
    return this.params;
  }
}
