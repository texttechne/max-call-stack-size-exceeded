import { InsuranceClaim } from "../insurance_claim/InsuranceClaim";
import { Settlement } from "../settlement/Settlement";

export interface SettlementItem {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementItemId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SettlementItemId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementId` |
   * | Type | `Edm.Int32` |
   */
  SettlementId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ItemType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Amount` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  Amount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Received` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Received: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Deposited` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Deposited: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Include` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Include: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClaimId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ClaimId: number;
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
   * | Name | `Settlement` |
   * | Type | `Emr.CasePacer.Data.Entities.Settlement` |
   */
  Settlement?: Settlement | null;
}

export type SettlementItemId = number | { SettlementItemId: number };

export interface EditableSettlementItem
  extends Pick<
      SettlementItem,
      "ItemType" | "Amount" | "Received" | "Deposited" | "Include" | "ClaimId"
    >,
    Partial<Pick<SettlementItem, "SettlementId">> {}
