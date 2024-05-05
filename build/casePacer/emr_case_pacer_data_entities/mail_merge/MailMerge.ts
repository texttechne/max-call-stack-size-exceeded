import { LawsuitPartyType } from "../lawsuit_party_type/LawsuitPartyType";

export interface MailMerge {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MailMergeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  MailMergeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MergeField` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  MergeField: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `htmlDiv` |
   * | Type | `Edm.String` |
   */
  htmlDiv: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitCategory` |
   * | Type | `Edm.String` |
   */
  LawsuitCategory: string | null;
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
   * | Name | `ParentObject` |
   * | Type | `Edm.String` |
   */
  ParentObject: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ObjectType` |
   * | Type | `Edm.String` |
   */
  ObjectType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Attribute` |
   * | Type | `Edm.String` |
   */
  Attribute: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttributeDescription` |
   * | Type | `Edm.String` |
   */
  AttributeDescription: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultValue` |
   * | Type | `Edm.String` |
   */
  DefaultValue: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Format` |
   * | Type | `Edm.String` |
   */
  Format: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Note` |
   * | Type | `Edm.String` |
   */
  Note: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPartyType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitPartyType` |
   */
  LawsuitPartyType?: LawsuitPartyType | null;
}

export type MailMergeId = number | { MailMergeId: number };

export interface EditableMailMerge
  extends Pick<MailMerge, "MergeField">,
    Partial<
      Pick<
        MailMerge,
        | "htmlDiv"
        | "LawsuitCategory"
        | "LawsuitPartyTypeId"
        | "ParentObject"
        | "ObjectType"
        | "Attribute"
        | "AttributeDescription"
        | "DefaultValue"
        | "Format"
        | "Note"
      >
    > {}
