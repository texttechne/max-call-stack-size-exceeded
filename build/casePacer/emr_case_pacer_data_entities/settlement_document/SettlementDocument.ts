import { Party } from "../party/Party";

export interface SettlementDocument {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementDocumentId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SettlementDocumentId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PlaintiffPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttyFeesPct` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  AttyFeesPct: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttyFeesTotal` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  AttyFeesTotal: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Party` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Party?: Party | null;
}

export type SettlementDocumentId = number | { SettlementDocumentId: number };

export interface EditableSettlementDocument
  extends Pick<
    SettlementDocument,
    "PlaintiffPartyId" | "AttyFeesPct" | "AttyFeesTotal"
  > {}
