import { Demand } from "../demand/Demand";

export interface DemandLineItem {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DemandLineItemID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DemandLineItemID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DemandID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DemandID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DemandItem` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  DemandItem: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DemandOrder` |
   * | Type | `Edm.Byte` |
   * | Nullable | `false` |
   */
  DemandOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DollarAmount` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  DollarAmount: number;
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
   * | Name | `MedicalProviderId` |
   * | Type | `Edm.Int32` |
   */
  MedicalProviderId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Demand` |
   * | Type | `Emr.CasePacer.Data.Entities.Demand` |
   */
  Demand?: Demand | null;
}

export type DemandLineItemId = number | { DemandLineItemID: number };

export interface EditableDemandLineItem
  extends Pick<
      DemandLineItem,
      "DemandID" | "DemandItem" | "DemandOrder" | "DollarAmount" | "ItemType"
    >,
    Partial<Pick<DemandLineItem, "MedicalProviderId">> {}
