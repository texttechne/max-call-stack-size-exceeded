import { InsuranceClaim } from "../insurance_claim/InsuranceClaim";
import { Lawsuit } from "../lawsuit/Lawsuit";
import { Demand } from "../demand/Demand";

export interface Negotiation {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NegotiationId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  NegotiationId: number;
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
   * | Name | `NegotiationNotes` |
   * | Type | `Edm.String` |
   */
  NegotiationNotes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LitigationThreatSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  LitigationThreatSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DemandSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DemandSentDate: string | null;
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
   * | Name | `CounterOfferSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  CounterOfferSentDate: string | null;
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
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Demands` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Demand)` |
   */
  Demands?: Array<Demand>;
}

export type NegotiationId = number | { NegotiationId: number };

export interface EditableNegotiation
  extends Partial<
    Pick<
      Negotiation,
      | "LawsuitId"
      | "NegotiationNotes"
      | "LitigationThreatSentDate"
      | "DemandSentDate"
      | "InsuranceClaimId"
      | "CounterOfferSentDate"
    >
  > {}
