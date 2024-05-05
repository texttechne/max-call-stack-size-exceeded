import { Firm } from "../firm/Firm";

export interface IntangibleDamage {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntangibleDamageId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  IntangibleDamageId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmPartyId` |
   * | Type | `Edm.Int32` |
   */
  FirmPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntangibleDamageName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  IntangibleDamageName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Spousal` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Spousal: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Sequence` |
   * | Type | `Edm.Int16` |
   * | Nullable | `false` |
   */
  Sequence: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
}

export type IntangibleDamageId = number | { IntangibleDamageId: number };

export interface EditableIntangibleDamage
  extends Pick<
      IntangibleDamage,
      "IntangibleDamageName" | "Spousal" | "Sequence"
    >,
    Partial<Pick<IntangibleDamage, "FirmPartyId">> {}
