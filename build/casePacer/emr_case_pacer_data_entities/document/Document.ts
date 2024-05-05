import { DocumentTemplate } from "../document_template/DocumentTemplate";
import { Lawsuit } from "../lawsuit/Lawsuit";
import { Tickler } from "../tickler/Tickler";
import { Record } from "../record/Record";
import { Party } from "../party/Party";

export interface Document {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DocumentID: number;
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
   * | Name | `DocumentTemplateID` |
   * | Type | `Edm.Int32` |
   */
  DocumentTemplateID: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DateCreated` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  DateCreated: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DateSent` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DateSent: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DateReceived` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DateReceived: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReceivedFromPartyID` |
   * | Type | `Edm.Int32` |
   */
  ReceivedFromPartyID: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SentToPartyID` |
   * | Type | `Edm.Int32` |
   */
  SentToPartyID: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OriginatingTicklerID` |
   * | Type | `Edm.Int32` |
   */
  OriginatingTicklerID: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReceivedTicklerID` |
   * | Type | `Edm.Int32` |
   */
  ReceivedTicklerID: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  RecordID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentTemplate` |
   * | Type | `Emr.CasePacer.Data.Entities.DocumentTemplate` |
   */
  DocumentTemplate?: DocumentTemplate | null;
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
   * | Name | `OriginatingTickler` |
   * | Type | `Emr.CasePacer.Data.Entities.Tickler` |
   */
  OriginatingTickler?: Tickler | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Record` |
   * | Type | `Emr.CasePacer.Data.Entities.Record` |
   */
  Record?: Record | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentReceivedFromParty` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  DocumentReceivedFromParty?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReceivedTickler` |
   * | Type | `Emr.CasePacer.Data.Entities.Tickler` |
   */
  ReceivedTickler?: Tickler | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentSentToParty` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  DocumentSentToParty?: Party | null;
}

export type DocumentId = number | { DocumentID: number };

export interface EditableDocument
  extends Pick<Document, "LawsuitID" | "DateCreated" | "RecordID">,
    Partial<
      Pick<
        Document,
        | "DocumentTemplateID"
        | "DateSent"
        | "DateReceived"
        | "ReceivedFromPartyID"
        | "SentToPartyID"
        | "OriginatingTicklerID"
        | "ReceivedTicklerID"
      >
    > {}
