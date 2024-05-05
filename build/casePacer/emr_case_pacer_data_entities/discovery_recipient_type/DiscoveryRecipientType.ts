import { Discovery } from "../discovery/Discovery";

export interface DiscoveryRecipientType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryRecipientTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DiscoveryRecipientTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryRecipientTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  DiscoveryRecipientTypeName: string;
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

export type DiscoveryRecipientTypeId =
  | number
  | { DiscoveryRecipientTypeId: number };

export interface EditableDiscoveryRecipientType
  extends Pick<DiscoveryRecipientType, "DiscoveryRecipientTypeName"> {}
