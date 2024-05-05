import { Party } from "../party/Party";
import { LawsuitParty } from "../lawsuit_party/LawsuitParty";
import { Lawsuit } from "../lawsuit/Lawsuit";

export interface EconomicLoss {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EconomicLossID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  EconomicLossID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawsuitID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffPartyID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PlaintiffPartyID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmployerLawsuitPartyID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  EmployerLawsuitPartyID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWages` |
   * | Type | `Edm.Decimal` |
   */
  LostWages: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesReq1SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  LostWagesReq1SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesReq2SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  LostWagesReq2SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesNeeded` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  LostWagesNeeded: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesReceived` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  LostWagesReceived: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesDateCalled` |
   * | Type | `Edm.DateTimeOffset` |
   */
  LostWagesDateCalled: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesIncludeInDemand` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  LostWagesIncludeInDemand: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesWhileTreating` |
   * | Type | `Edm.Decimal` |
   */
  LostWagesWhileTreating: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesWhileTreatingIncludeInDemand` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  LostWagesWhileTreatingIncludeInDemand: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LossOfOpportunity` |
   * | Type | `Edm.Decimal` |
   */
  LossOfOpportunity: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LossOfOpportunityReq1SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  LossOfOpportunityReq1SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LossOfOpportunityReq2SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  LossOfOpportunityReq2SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LossOfOpportunityDateCalled` |
   * | Type | `Edm.DateTimeOffset` |
   */
  LossOfOpportunityDateCalled: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LossOfOpportunityNeeded` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  LossOfOpportunityNeeded: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LossOfOpportunityReceived` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  LossOfOpportunityReceived: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LossOfOpportunityIncludeInDemand` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  LossOfOpportunityIncludeInDemand: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesWhileTreatingNotes` |
   * | Type | `Edm.String` |
   */
  LostWagesWhileTreatingNotes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Plaintiff` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Plaintiff?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Employer` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  Employer?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
}

export type EconomicLossId = number | { EconomicLossID: number };

export interface EditableEconomicLoss
  extends Pick<
      EconomicLoss,
      | "LawsuitID"
      | "PlaintiffPartyID"
      | "EmployerLawsuitPartyID"
      | "LostWagesNeeded"
      | "LostWagesReceived"
      | "LostWagesIncludeInDemand"
      | "LostWagesWhileTreatingIncludeInDemand"
      | "LossOfOpportunityNeeded"
      | "LossOfOpportunityReceived"
      | "LossOfOpportunityIncludeInDemand"
    >,
    Partial<
      Pick<
        EconomicLoss,
        | "LostWages"
        | "LostWagesReq1SentDate"
        | "LostWagesReq2SentDate"
        | "LostWagesDateCalled"
        | "LostWagesWhileTreating"
        | "LossOfOpportunity"
        | "LossOfOpportunityReq1SentDate"
        | "LossOfOpportunityReq2SentDate"
        | "LossOfOpportunityDateCalled"
        | "LostWagesWhileTreatingNotes"
      >
    > {}
