import { TicklerAnswer } from "../tickler_answer/TicklerAnswer";
import { CasePacerUser } from "../case_pacer_user/CasePacerUser";
import { Firm } from "../firm/Firm";
import { Lawsuit } from "../lawsuit/Lawsuit";
import { LawsuitParty } from "../lawsuit_party/LawsuitParty";
import { TicklerTemplate } from "../tickler_template/TicklerTemplate";
import { Document } from "../document/Document";

export interface Tickler {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerTemplateId` |
   * | Type | `Edm.Int32` |
   */
  TicklerTemplateId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PhaseAdvancing` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  PhaseAdvancing: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreatedDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  CreatedDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OriginalDueDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  OriginalDueDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CurrentDueDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  CurrentDueDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClosedDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ClosedDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClosedByUserId` |
   * | Type | `Edm.Int32` |
   */
  ClosedByUserId: number | null;
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
   * | Name | `ReasonForDelay` |
   * | Type | `Edm.String` |
   */
  ReasonForDelay: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerDetails` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  TicklerDetails: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerAnswerId` |
   * | Type | `Edm.Int32` |
   */
  TicklerAnswerId: number | null;
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
   * | Name | `RelatedEntityId` |
   * | Type | `Edm.Int32` |
   */
  RelatedEntityId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClosedByUserBool` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ClosedByUserBool: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AssignedLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  AssignedLawsuitPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  FirmId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerAnswer` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerAnswer` |
   */
  TicklerAnswer?: TicklerAnswer | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClosingUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  ClosingUser?: CasePacerUser | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
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
   * | Name | `AssignedLawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  AssignedLawsuitParty?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerTemplate` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerTemplate` |
   */
  TicklerTemplate?: TicklerTemplate | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OriginatingTicklerDocuments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Document)` |
   */
  OriginatingTicklerDocuments?: Array<Document>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReceivedTicklerDocuments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Document)` |
   */
  ReceivedTicklerDocuments?: Array<Document>;
}

export type TicklerId = number | { TicklerId: number };

export interface EditableTickler
  extends Pick<
      Tickler,
      | "PhaseAdvancing"
      | "CreatedDate"
      | "OriginalDueDate"
      | "CurrentDueDate"
      | "TicklerDetails"
      | "ClosedByUserBool"
      | "FirmId"
    >,
    Partial<
      Pick<
        Tickler,
        | "TicklerTemplateId"
        | "ClosedDate"
        | "ClosedByUserId"
        | "Notes"
        | "ReasonForDelay"
        | "TicklerAnswerId"
        | "LawsuitId"
        | "RelatedEntityId"
        | "AssignedLawsuitPartyId"
      >
    > {}
