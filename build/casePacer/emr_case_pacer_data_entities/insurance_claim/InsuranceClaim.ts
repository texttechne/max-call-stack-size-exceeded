import { LawsuitParty } from "../lawsuit_party/LawsuitParty";
import { InsurancePolicy } from "../insurance_policy/InsurancePolicy";
import { Negotiation } from "../negotiation/Negotiation";
import { InsuranceClaimDemand } from "../insurance_claim_demand/InsuranceClaimDemand";
import { PIP } from "../pip/PIP";
import { PIPBenefit } from "../pip_benefit/PIPBenefit";
import { PropertyDamage } from "../property_damage/PropertyDamage";
import { SettlementItem } from "../settlement_item/SettlementItem";

export interface InsuranceClaim {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaimId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  InsuranceClaimId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsurancePolicyId` |
   * | Type | `Edm.Int32` |
   */
  InsurancePolicyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceAdjusterLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  InsuranceAdjusterLawsuitPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClaimNumber` |
   * | Type | `Edm.String` |
   */
  ClaimNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedPayPerPerson` |
   * | Type | `Edm.Decimal` |
   */
  MedPayPerPerson: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UnderInsuredMotorist` |
   * | Type | `Edm.Decimal` |
   */
  UnderInsuredMotorist: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UninsuredMotorist` |
   * | Type | `Edm.Decimal` |
   */
  UninsuredMotorist: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceCompanyCalledDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  InsuranceCompanyCalledDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RepresentationLtr1SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  RepresentationLtr1SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RepresentationLtr2SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  RepresentationLtr2SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceInfoReceivedDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  InsuranceInfoReceivedDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClaimNotes` |
   * | Type | `Edm.String` |
   */
  ClaimNotes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsDeleted` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  IsDeleted: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BodilyInjuryLiabilityPerPerson` |
   * | Type | `Edm.Decimal` |
   */
  BodilyInjuryLiabilityPerPerson: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BodilyInjuryLiabilityPerAccident` |
   * | Type | `Edm.Decimal` |
   */
  BodilyInjuryLiabilityPerAccident: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Dwelling` |
   * | Type | `Edm.Decimal` |
   */
  Dwelling: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OtherStructures` |
   * | Type | `Edm.Decimal` |
   */
  OtherStructures: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PersonalProperty` |
   * | Type | `Edm.Decimal` |
   */
  PersonalProperty: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LossofUse` |
   * | Type | `Edm.Decimal` |
   */
  LossofUse: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OtherCoverage` |
   * | Type | `Edm.Decimal` |
   */
  OtherCoverage: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceAdjuster` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  InsuranceAdjuster?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsurancePolicy` |
   * | Type | `Emr.CasePacer.Data.Entities.InsurancePolicy` |
   */
  InsurancePolicy?: InsurancePolicy | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Negotiations` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Negotiation)` |
   */
  Negotiations?: Array<Negotiation>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaimDemands` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.InsuranceClaimDemand)` |
   */
  InsuranceClaimDemands?: Array<InsuranceClaimDemand>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PIPs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PIP)` |
   */
  PIPs?: Array<PIP>;
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
   * | Name | `PropertyDamages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PropertyDamage)` |
   */
  PropertyDamages?: Array<PropertyDamage>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementItems` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SettlementItem)` |
   */
  SettlementItems?: Array<SettlementItem>;
}

export type InsuranceClaimId = number | { InsuranceClaimId: number };

export interface EditableInsuranceClaim
  extends Pick<InsuranceClaim, "IsDeleted">,
    Partial<
      Pick<
        InsuranceClaim,
        | "InsurancePolicyId"
        | "InsuranceAdjusterLawsuitPartyId"
        | "ClaimNumber"
        | "MedPayPerPerson"
        | "UnderInsuredMotorist"
        | "UninsuredMotorist"
        | "InsuranceCompanyCalledDate"
        | "RepresentationLtr1SentDate"
        | "RepresentationLtr2SentDate"
        | "InsuranceInfoReceivedDate"
        | "ClaimNotes"
        | "BodilyInjuryLiabilityPerPerson"
        | "BodilyInjuryLiabilityPerAccident"
        | "Dwelling"
        | "OtherStructures"
        | "PersonalProperty"
        | "LossofUse"
        | "OtherCoverage"
      >
    > {}
