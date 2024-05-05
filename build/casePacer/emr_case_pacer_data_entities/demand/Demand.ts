import { Law } from "../law/Law";
import { Negotiation } from "../negotiation/Negotiation";
import { CounterOffer } from "../counter_offer/CounterOffer";
import { DemandLineItem } from "../demand_line_item/DemandLineItem";
import { InsuranceClaimDemand } from "../insurance_claim_demand/InsuranceClaimDemand";

export interface Demand {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DemandId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DemandId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NegotiationId` |
   * | Type | `Edm.Int32` |
   */
  NegotiationId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Accepted` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Accepted: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Active` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Active: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DemandLetterDocUrl` |
   * | Type | `Edm.String` |
   */
  DemandLetterDocUrl: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntroductoryParagraph` |
   * | Type | `Edm.String` |
   */
  IntroductoryParagraph: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PersonalInformation` |
   * | Type | `Edm.String` |
   */
  PersonalInformation: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AccidentFacts` |
   * | Type | `Edm.String` |
   */
  AccidentFacts: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LiabilityLawId` |
   * | Type | `Edm.Int32` |
   */
  LiabilityLawId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LiabilityLawText` |
   * | Type | `Edm.String` |
   */
  LiabilityLawText: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntangibleDamagesLawId` |
   * | Type | `Edm.Int32` |
   */
  IntangibleDamagesLawId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntangibleDamagesLawText` |
   * | Type | `Edm.String` |
   */
  IntangibleDamagesLawText: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CourseOfTreatmentParagraph` |
   * | Type | `Edm.String` |
   */
  CourseOfTreatmentParagraph: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LossOfEarningsParagraph` |
   * | Type | `Edm.String` |
   */
  LossOfEarningsParagraph: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesLawId` |
   * | Type | `Edm.Int32` |
   */
  LostWagesLawId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesLawText` |
   * | Type | `Edm.String` |
   */
  LostWagesLawText: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreatedAt` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  CreatedAt: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UpdatedAt` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  UpdatedAt: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShortFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ShortFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntangibleDamagesLaw` |
   * | Type | `Emr.CasePacer.Data.Entities.Law` |
   */
  IntangibleDamagesLaw?: Law | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LiabilityLaw` |
   * | Type | `Emr.CasePacer.Data.Entities.Law` |
   */
  LiabilityLaw?: Law | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesLaw` |
   * | Type | `Emr.CasePacer.Data.Entities.Law` |
   */
  LostWagesLaw?: Law | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Negotiation` |
   * | Type | `Emr.CasePacer.Data.Entities.Negotiation` |
   */
  Negotiation?: Negotiation | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CounterOffers` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CounterOffer)` |
   */
  CounterOffers?: Array<CounterOffer>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DemandLineItems` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DemandLineItem)` |
   */
  DemandLineItems?: Array<DemandLineItem>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaimDemands` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.InsuranceClaimDemand)` |
   */
  InsuranceClaimDemands?: Array<InsuranceClaimDemand>;
}

export type DemandId = number | { DemandId: number };

export interface EditableDemand
  extends Pick<
      Demand,
      "Accepted" | "Active" | "CreatedAt" | "UpdatedAt" | "ShortFlag"
    >,
    Partial<
      Pick<
        Demand,
        | "NegotiationId"
        | "DemandLetterDocUrl"
        | "IntroductoryParagraph"
        | "PersonalInformation"
        | "AccidentFacts"
        | "LiabilityLawId"
        | "LiabilityLawText"
        | "IntangibleDamagesLawId"
        | "IntangibleDamagesLawText"
        | "CourseOfTreatmentParagraph"
        | "LossOfEarningsParagraph"
        | "LostWagesLawId"
        | "LostWagesLawText"
      >
    > {}
