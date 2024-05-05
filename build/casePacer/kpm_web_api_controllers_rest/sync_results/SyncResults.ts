export interface SyncResults {
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   */
  Description: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StartDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  StartDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EndDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  EndDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MoreEntries` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  MoreEntries: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NextStartSyncId` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  NextStartSyncId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyIds` |
   * | Type | `Collection(Edm.Int32)` |
   * | Nullable | `false` |
   */
  PartyIds: Array<number>;
}

export interface EditableSyncResults
  extends Pick<SyncResults, "MoreEntries" | "NextStartSyncId" | "PartyIds">,
    Partial<Pick<SyncResults, "Description" | "StartDate" | "EndDate">> {}
