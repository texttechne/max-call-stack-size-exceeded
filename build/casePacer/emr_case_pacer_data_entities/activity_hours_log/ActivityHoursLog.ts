import { ActivityLog } from "../activity_log/ActivityLog";

export interface ActivityHoursLog {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityHoursLogId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ActivityHoursLogId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityLogId` |
   * | Type | `Edm.Int32` |
   */
  ActivityLogId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StartDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  StartDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StartTime` |
   * | Type | `Edm.Duration` |
   * | Nullable | `false` |
   */
  StartTime: string;
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
   * | Name | `EndTime` |
   * | Type | `Edm.Duration` |
   */
  EndTime: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DurationinMinutes` |
   * | Type | `Edm.Int32` |
   */
  DurationinMinutes: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityLog` |
   * | Type | `Emr.CasePacer.Data.Entities.ActivityLog` |
   */
  ActivityLog?: ActivityLog | null;
}

export type ActivityHoursLogId = number | { ActivityHoursLogId: number };

export interface EditableActivityHoursLog
  extends Pick<ActivityHoursLog, "StartDate" | "StartTime">,
    Partial<
      Pick<
        ActivityHoursLog,
        "ActivityLogId" | "EndDate" | "EndTime" | "DurationinMinutes"
      >
    > {}
