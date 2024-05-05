import { InsuranceClaim } from "../insurance_claim/InsuranceClaim";
import { Litigation } from "../litigation/Litigation";
import { ADR } from "../adr/ADR";
import { Deposition } from "../deposition/Deposition";
import { Expense } from "../expense/Expense";
import { LienSubrogation } from "../lien_subrogation/LienSubrogation";
import { MedicalProvider } from "../medical_provider/MedicalProvider";
import { PropertyDamage } from "../property_damage/PropertyDamage";
import { Lawsuit } from "../lawsuit/Lawsuit";
import { LawsuitPartyType } from "../lawsuit_party_type/LawsuitPartyType";
import { Party } from "../party/Party";
import { AttorneyFeeInterest } from "../attorney_fee_interest/AttorneyFeeInterest";
import { DefendantAttorney } from "../defendant_attorney/DefendantAttorney";
import { DefendantLawsuitParty } from "../defendant_lawsuit_party/DefendantLawsuitParty";
import { EconomicLoss } from "../economic_loss/EconomicLoss";
import { InsurancePolicy } from "../insurance_policy/InsurancePolicy";
import { Investigator } from "../investigator/Investigator";
import { LawsuitRole } from "../lawsuit_role/LawsuitRole";
import { MedicalEvaluation } from "../medical_evaluation/MedicalEvaluation";
import { PIPBenefit } from "../pip_benefit/PIPBenefit";
import { PlaintiffLawsuitParty } from "../plaintiff_lawsuit_party/PlaintiffLawsuitParty";
import { PoliceReport } from "../police_report/PoliceReport";
import { Tickler } from "../tickler/Tickler";
import { Witness } from "../witness/Witness";

export interface LawsuitParty {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawsuitPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   */
  PartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPartyTypeId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitPartyTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PrimaryFlag` |
   * | Type | `Edm.Boolean` |
   */
  PrimaryFlag: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActiveFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ActiveFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BillableRate` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  BillableRate: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Notes` |
   * | Type | `Edm.String` |
   */
  Notes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubType` |
   * | Type | `Edm.String` |
   */
  SubType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ClientFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaimsByCompany` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.InsuranceClaim)` |
   */
  InsuranceClaimsByCompany?: Array<InsuranceClaim>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaimsByInsured` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.InsuranceClaim)` |
   */
  InsuranceClaimsByInsured?: Array<InsuranceClaim>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaimsByTiedTo` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.InsuranceClaim)` |
   */
  InsuranceClaimsByTiedTo?: Array<InsuranceClaim>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CourtLitigations` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Litigation)` |
   */
  CourtLitigations?: Array<Litigation>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JudgeLitigations` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Litigation)` |
   */
  JudgeLitigations?: Array<Litigation>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADRs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ADR)` |
   */
  ADRs?: Array<ADR>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeponentDepositions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Deposition)` |
   */
  DeponentDepositions?: Array<Deposition>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeposerDepositions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Deposition)` |
   */
  DeposerDepositions?: Array<Deposition>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecorderDepositions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Deposition)` |
   */
  RecorderDepositions?: Array<Deposition>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PayeeExpenses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Expense)` |
   */
  PayeeExpenses?: Array<Expense>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubrogeeLienHolderLienSubrogations` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LienSubrogation)` |
   */
  SubrogeeLienHolderLienSubrogations?: Array<LienSubrogation>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalProviders` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.MedicalProvider)` |
   */
  MedicalProviders?: Array<MedicalProvider>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RepairCompanyPropertyDamages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PropertyDamage)` |
   */
  RepairCompanyPropertyDamages?: Array<PropertyDamage>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPartyType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitPartyType` |
   */
  LawsuitPartyType?: LawsuitPartyType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Party` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Party?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyFeeInterest` |
   * | Type | `Emr.CasePacer.Data.Entities.AttorneyFeeInterest` |
   */
  AttorneyFeeInterest?: AttorneyFeeInterest | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Defendants` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DefendantAttorney)` |
   */
  Defendants?: Array<DefendantAttorney>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantAttorneys` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DefendantAttorney)` |
   */
  DefendantAttorneys?: Array<DefendantAttorney>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantLawsuitParties` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DefendantLawsuitParty)` |
   */
  DefendantLawsuitParties?: Array<DefendantLawsuitParty>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EconomicLosses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.EconomicLoss)` |
   */
  EconomicLosses?: Array<EconomicLoss>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaimsByAdjuster` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.InsuranceClaim)` |
   */
  InsuranceClaimsByAdjuster?: Array<InsuranceClaim>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsurancePoliciesByCompany` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.InsurancePolicy)` |
   */
  InsurancePoliciesByCompany?: Array<InsurancePolicy>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsurancePoliciesByInsured` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.InsurancePolicy)` |
   */
  InsurancePoliciesByInsured?: Array<InsurancePolicy>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsurancePoliciesByTiedTo` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.InsurancePolicy)` |
   */
  InsurancePoliciesByTiedTo?: Array<InsurancePolicy>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Investigators` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Investigator)` |
   */
  Investigators?: Array<Investigator>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitRoles` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitRole)` |
   */
  LawsuitRoles?: Array<LawsuitRole>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalEvaluationsByDoctor` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.MedicalEvaluation)` |
   */
  MedicalEvaluationsByDoctor?: Array<MedicalEvaluation>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalEvaluationsByPrepBy` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.MedicalEvaluation)` |
   */
  MedicalEvaluationsByPrepBy?: Array<MedicalEvaluation>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalEvaluationsByRequestor` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.MedicalEvaluation)` |
   */
  MedicalEvaluationsByRequestor?: Array<MedicalEvaluation>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PIPBenefits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PIPBenefit)` |
   */
  PIPBenefits?: Array<PIPBenefit>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffLawsuitParties` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PlaintiffLawsuitParty)` |
   */
  PlaintiffLawsuitParties?: Array<PlaintiffLawsuitParty>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PoliceReports` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PoliceReport)` |
   */
  PoliceReports?: Array<PoliceReport>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AdjusterPropertyDamages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PropertyDamage)` |
   */
  AdjusterPropertyDamages?: Array<PropertyDamage>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CompanyPropertyDamages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PropertyDamage)` |
   */
  CompanyPropertyDamages?: Array<PropertyDamage>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffPropertyDamages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PropertyDamage)` |
   */
  PlaintiffPropertyDamages?: Array<PropertyDamage>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Ticklers` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Tickler)` |
   */
  Ticklers?: Array<Tickler>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Witness` |
   * | Type | `Emr.CasePacer.Data.Entities.Witness` |
   */
  Witness?: Witness | null;
}

export type LawsuitPartyId = number | { LawsuitPartyId: number };

export interface EditableLawsuitParty
  extends Pick<LawsuitParty, "ActiveFlag" | "BillableRate" | "ClientFlag">,
    Partial<
      Pick<
        LawsuitParty,
        | "LawsuitId"
        | "PartyId"
        | "LawsuitPartyTypeId"
        | "PrimaryFlag"
        | "Notes"
        | "SubType"
      >
    > {}
