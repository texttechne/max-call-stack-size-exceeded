export interface DashboardAchievement {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   */
  FirmId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DisplayName` |
   * | Type | `Edm.String` |
   */
  DisplayName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EventCount` |
   * | Type | `Edm.Int32` |
   */
  EventCount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCount` |
   * | Type | `Edm.Int32` |
   */
  TicklerCount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CaseUpdateCount` |
   * | Type | `Edm.Int32` |
   */
  CaseUpdateCount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyUpdateCount` |
   * | Type | `Edm.Int32` |
   */
  PartyUpdateCount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MessageCount` |
   * | Type | `Edm.Int32` |
   */
  MessageCount: number | null;
}

export type DashboardAchievementId = number | { PartyId: number };

export interface EditableDashboardAchievement
  extends Partial<
    Pick<
      DashboardAchievement,
      | "FirmId"
      | "DisplayName"
      | "EventCount"
      | "TicklerCount"
      | "CaseUpdateCount"
      | "PartyUpdateCount"
      | "MessageCount"
    >
  > {}
