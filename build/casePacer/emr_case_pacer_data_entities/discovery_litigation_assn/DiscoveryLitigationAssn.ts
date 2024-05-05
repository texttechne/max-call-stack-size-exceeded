import { Discovery } from "../discovery/Discovery";
import { Litigation } from "../litigation/Litigation";

export interface DiscoveryLitigationAssn {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryLitigationAssnId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DiscoveryLitigationAssnId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryId` |
   * | Type | `Edm.Int32` |
   */
  DiscoveryId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LitigationId` |
   * | Type | `Edm.Int32` |
   */
  LitigationId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Discovery` |
   * | Type | `Emr.CasePacer.Data.Entities.Discovery` |
   */
  Discovery?: Discovery | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Litigation` |
   * | Type | `Emr.CasePacer.Data.Entities.Litigation` |
   */
  Litigation?: Litigation | null;
}

export type DiscoveryLitigationAssnId =
  | number
  | { DiscoveryLitigationAssnId: number };

export interface EditableDiscoveryLitigationAssn
  extends Partial<
    Pick<DiscoveryLitigationAssn, "DiscoveryId" | "LitigationId">
  > {}
