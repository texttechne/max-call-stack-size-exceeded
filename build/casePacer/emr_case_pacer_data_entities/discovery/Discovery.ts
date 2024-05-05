import { Party } from "../party/Party";
import { DiscoveryRecipientType } from "../discovery_recipient_type/DiscoveryRecipientType";
import { DiscoveryTarget } from "../discovery_target/DiscoveryTarget";
import { DiscoveryType } from "../discovery_type/DiscoveryType";
import { Lawsuit } from "../lawsuit/Lawsuit";
import { DiscoveryLitigationAssn } from "../discovery_litigation_assn/DiscoveryLitigationAssn";

export interface Discovery {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DiscoveryId: number;
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
   * | Name | `DiscoveryTargetId` |
   * | Type | `Edm.Int32` |
   */
  DiscoveryTargetId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryTypeId` |
   * | Type | `Edm.Int32` |
   */
  DiscoveryTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryRecipientTypeId` |
   * | Type | `Edm.Int32` |
   */
  DiscoveryRecipientTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffPartyId` |
   * | Type | `Edm.Int32` |
   */
  PlaintiffPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantPartyId` |
   * | Type | `Edm.Int32` |
   */
  DefendantPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReceivedDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ReceivedDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DueDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DueDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryDescription` |
   * | Type | `Edm.String` |
   */
  DiscoveryDescription: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExtensionFiledDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ExtensionFiledDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExtensionGrantedDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ExtensionGrantedDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Discovr1SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  Discovr1SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Discovr2SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  Discovr2SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Letter1ToPlaintiffSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  Letter1ToPlaintiffSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Letter2ToPlaintiffSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  Letter2ToPlaintiffSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AnswersReceivedFromPlaintiffDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  AnswersReceivedFromPlaintiffDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NonPartyRecipientPartyId` |
   * | Type | `Edm.Int32` |
   */
  NonPartyRecipientPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CompelFiledDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  CompelFiledDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CompelGrantedDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  CompelGrantedDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DueByOrder` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  DueByOrder: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Defendant` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Defendant?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryRecipientType` |
   * | Type | `Emr.CasePacer.Data.Entities.DiscoveryRecipientType` |
   */
  DiscoveryRecipientType?: DiscoveryRecipientType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryTarget` |
   * | Type | `Emr.CasePacer.Data.Entities.DiscoveryTarget` |
   */
  DiscoveryTarget?: DiscoveryTarget | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryType` |
   * | Type | `Emr.CasePacer.Data.Entities.DiscoveryType` |
   */
  DiscoveryType?: DiscoveryType | null;
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
   * | Name | `NonPartyRecipient` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  NonPartyRecipient?: Party | null;
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
   * | Name | `DiscoveryLitigationAssns` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DiscoveryLitigationAssn)` |
   */
  DiscoveryLitigationAssns?: Array<DiscoveryLitigationAssn>;
}

export type DiscoveryId = number | { DiscoveryId: number };

export interface EditableDiscovery
  extends Pick<Discovery, "DueByOrder">,
    Partial<
      Pick<
        Discovery,
        | "LawsuitId"
        | "DiscoveryTargetId"
        | "DiscoveryTypeId"
        | "DiscoveryRecipientTypeId"
        | "PlaintiffPartyId"
        | "DefendantPartyId"
        | "ReceivedDate"
        | "SentDate"
        | "DueDate"
        | "DiscoveryDescription"
        | "ExtensionFiledDate"
        | "ExtensionGrantedDate"
        | "Discovr1SentDate"
        | "Discovr2SentDate"
        | "Letter1ToPlaintiffSentDate"
        | "Letter2ToPlaintiffSentDate"
        | "AnswersReceivedFromPlaintiffDate"
        | "NonPartyRecipientPartyId"
        | "CompelFiledDate"
        | "CompelGrantedDate"
      >
    > {}
