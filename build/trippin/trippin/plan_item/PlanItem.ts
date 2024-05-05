export interface PlanItem {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlanItemId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PlanItemId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ConfirmationCode` |
   * | Type | `Edm.String` |
   */
  ConfirmationCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StartsAt` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  StartsAt: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EndsAt` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  EndsAt: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Duration` |
   * | Type | `Edm.Duration` |
   * | Nullable | `false` |
   */
  Duration: string;
}

export type PlanItemId = number | { PlanItemId: number };

export interface EditablePlanItem
  extends Pick<PlanItem, "StartsAt" | "EndsAt" | "Duration">,
    Partial<Pick<PlanItem, "ConfirmationCode">> {}
