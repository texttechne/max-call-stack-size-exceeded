import { Discovery } from "../discovery/Discovery";

export interface DiscoveryTarget {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryTargetId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DiscoveryTargetId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryTargetName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  DiscoveryTargetName: string;
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

export type DiscoveryTargetId = number | { DiscoveryTargetId: number };

export interface EditableDiscoveryTarget
  extends Pick<DiscoveryTarget, "DiscoveryTargetName"> {}
