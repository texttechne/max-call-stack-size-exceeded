import { Discovery } from "../discovery/Discovery";

export interface DiscoveryType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DiscoveryTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  DiscoveryTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Discoveries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Discovery)` |
   */
  Discoveries?: Array<Discovery>;
}

export type DiscoveryTypeId = number | { DiscoveryTypeId: number };

export interface EditableDiscoveryType
  extends Pick<DiscoveryType, "DiscoveryTypeName"> {}
