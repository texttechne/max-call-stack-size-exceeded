import { Firm } from "../firm/Firm";
import { Demand } from "../demand/Demand";

export interface Law {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  FirmId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawCode` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LawCode: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawText` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LawText: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LawType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Active` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Active: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntangibleDamagesDemands` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Demand)` |
   */
  IntangibleDamagesDemands?: Array<Demand>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LiabilityDemands` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Demand)` |
   */
  LiabilityDemands?: Array<Demand>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesDemands` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Demand)` |
   */
  LostWagesDemands?: Array<Demand>;
}

export type LawId = number | { LawID: number };

export interface EditableLaw
  extends Pick<Law, "FirmId" | "LawCode" | "LawText" | "LawType" | "Active"> {}
