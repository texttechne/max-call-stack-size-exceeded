import { LawsuitParty } from "../lawsuit_party/LawsuitParty";
import { InsuranceClaim } from "../insurance_claim/InsuranceClaim";
import { Lawsuit } from "../lawsuit/Lawsuit";
import { PropertyType } from "../property_type/PropertyType";
import { Company } from "../company/Company";

export interface PropertyDamage {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PropertyDamageId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PropertyDamageId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PropertyTypeId` |
   * | Type | `Edm.Int32` |
   */
  PropertyTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PropertyTypeDetails` |
   * | Type | `Edm.String` |
   */
  PropertyTypeDetails: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RepairCompanyPartyId` |
   * | Type | `Edm.Int32` |
   */
  RepairCompanyPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AutomobileMake` |
   * | Type | `Edm.String` |
   */
  AutomobileMake: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AutomobileModel` |
   * | Type | `Edm.String` |
   */
  AutomobileModel: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AutomobileMiles` |
   * | Type | `Edm.Int32` |
   */
  AutomobileMiles: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AutomobileFairMarketValue` |
   * | Type | `Edm.Decimal` |
   */
  AutomobileFairMarketValue: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RepairCost` |
   * | Type | `Edm.Decimal` |
   */
  RepairCost: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RepairEstimate` |
   * | Type | `Edm.Decimal` |
   */
  RepairEstimate: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AdditionalExpensesIncurred` |
   * | Type | `Edm.Decimal` |
   */
  AdditionalExpensesIncurred: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PlaintiffLawsuitPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AdjusterLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AdjusterLawsuitPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaimNum` |
   * | Type | `Edm.String` |
   */
  InsuranceClaimNum: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AutomobileYear` |
   * | Type | `Edm.Int32` |
   */
  AutomobileYear: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PropertyDamageLiability` |
   * | Type | `Edm.Decimal` |
   */
  PropertyDamageLiability: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UninsuredPropertyDamage` |
   * | Type | `Edm.Decimal` |
   */
  UninsuredPropertyDamage: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UnderInsuredPropertyDamage` |
   * | Type | `Edm.Decimal` |
   */
  UnderInsuredPropertyDamage: number | null;
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
   * | Name | `InsuranceClaimId` |
   * | Type | `Edm.Int32` |
   */
  InsuranceClaimId: number | null;
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
   * | Name | `InsuranceCompanyLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  InsuranceCompanyLawsuitPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Adjuster` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  Adjuster?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaim` |
   * | Type | `Emr.CasePacer.Data.Entities.InsuranceClaim` |
   */
  InsuranceClaim?: InsuranceClaim | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceCompany` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  InsuranceCompany?: LawsuitParty | null;
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
   * | Name | `Plaintiff` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  Plaintiff?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PropertyType` |
   * | Type | `Emr.CasePacer.Data.Entities.PropertyType` |
   */
  PropertyType?: PropertyType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RepairCompany` |
   * | Type | `Emr.CasePacer.Data.Entities.Company` |
   */
  RepairCompany?: Company | null;
}

export type PropertyDamageId = number | { PropertyDamageId: number };

export interface EditablePropertyDamage
  extends Pick<
      PropertyDamage,
      | "PlaintiffLawsuitPartyId"
      | "AdjusterLawsuitPartyId"
      | "InsuranceCompanyLawsuitPartyId"
    >,
    Partial<
      Pick<
        PropertyDamage,
        | "PropertyTypeId"
        | "PropertyTypeDetails"
        | "RepairCompanyPartyId"
        | "AutomobileMake"
        | "AutomobileModel"
        | "AutomobileMiles"
        | "AutomobileFairMarketValue"
        | "RepairCost"
        | "RepairEstimate"
        | "AdditionalExpensesIncurred"
        | "InsuranceClaimNum"
        | "AutomobileYear"
        | "PropertyDamageLiability"
        | "UninsuredPropertyDamage"
        | "UnderInsuredPropertyDamage"
        | "Notes"
        | "InsuranceClaimId"
        | "LawsuitId"
      >
    > {}
