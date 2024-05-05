import { Party } from "../party/Party";
import { Lawsuit } from "../lawsuit/Lawsuit";
import { ADR } from "../adr/ADR";
import { AnswerEnlargement } from "../answer_enlargement/AnswerEnlargement";
import { Complaint } from "../complaint/Complaint";
import { DefendantLitigationAssn } from "../defendant_litigation_assn/DefendantLitigationAssn";
import { DepositionLitigationAssn } from "../deposition_litigation_assn/DepositionLitigationAssn";
import { DiscoveryLitigationAssn } from "../discovery_litigation_assn/DiscoveryLitigationAssn";
import { Trial } from "../trial/Trial";
import { WitnessLitigationAssn } from "../witness_litigation_assn/WitnessLitigationAssn";

export interface Litigation {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LitigationId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LitigationId: number;
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
   * | Name | `CourtPartyId` |
   * | Type | `Edm.Int32` |
   */
  CourtPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JudgePartyId` |
   * | Type | `Edm.Int32` |
   */
  JudgePartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ComplaintSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ComplaintSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ComplaintFiledDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ComplaintFiledDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CrossComplaintFiledDated` |
   * | Type | `Edm.DateTimeOffset` |
   */
  CrossComplaintFiledDated: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NOIFiledDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  NOIFiledDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CauseNumber` |
   * | Type | `Edm.String` |
   */
  CauseNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LitigationNotes` |
   * | Type | `Edm.String` |
   */
  LitigationNotes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CourtStaff` |
   * | Type | `Edm.String` |
   */
  CourtStaff: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CourtRoom` |
   * | Type | `Edm.String` |
   */
  CourtRoom: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LitigationName` |
   * | Type | `Edm.String` |
   */
  LitigationName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InactiveDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  InactiveDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Court` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Court?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Judge` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Judge?: Party | null;
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
   * | Name | `ADRs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ADR)` |
   */
  ADRs?: Array<ADR>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AnswerEnlargements` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.AnswerEnlargement)` |
   */
  AnswerEnlargements?: Array<AnswerEnlargement>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Complaints` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Complaint)` |
   */
  Complaints?: Array<Complaint>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantLitigationAssns` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DefendantLitigationAssn)` |
   */
  DefendantLitigationAssns?: Array<DefendantLitigationAssn>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DepositionLitigationAssns` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DepositionLitigationAssn)` |
   */
  DepositionLitigationAssns?: Array<DepositionLitigationAssn>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryLitigationAssns` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DiscoveryLitigationAssn)` |
   */
  DiscoveryLitigationAssns?: Array<DiscoveryLitigationAssn>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Trials` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Trial)` |
   */
  Trials?: Array<Trial>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessLitigationAssns` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.WitnessLitigationAssn)` |
   */
  WitnessLitigationAssns?: Array<WitnessLitigationAssn>;
}

export type LitigationId = number | { LitigationId: number };

export interface EditableLitigation
  extends Partial<
    Pick<
      Litigation,
      | "LawsuitId"
      | "CourtPartyId"
      | "JudgePartyId"
      | "ComplaintSentDate"
      | "ComplaintFiledDate"
      | "CrossComplaintFiledDated"
      | "NOIFiledDate"
      | "CauseNumber"
      | "LitigationNotes"
      | "CourtStaff"
      | "CourtRoom"
      | "LitigationName"
      | "InactiveDate"
    >
  > {}
