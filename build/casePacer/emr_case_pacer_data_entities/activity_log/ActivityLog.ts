import { ActivityLogType } from "../activity_log_type/ActivityLogType";
import { CasePacerUser } from "../case_pacer_user/CasePacerUser";
import { Expense } from "../expense/Expense";
import { Lawsuit } from "../lawsuit/Lawsuit";
import { ActivityHoursLog } from "../activity_hours_log/ActivityHoursLog";

export interface ActivityLog {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
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
   * | Name | `EntryDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  EntryDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityDescription` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ActivityDescription: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUserId` |
   * | Type | `Edm.Int32` |
   */
  CasePacerUserId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RelatedEntityType` |
   * | Type | `Edm.String` |
   */
  RelatedEntityType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RelatedEntityId` |
   * | Type | `Edm.Int32` |
   */
  RelatedEntityId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Billable` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Billable: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BillableRate` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  BillableRate: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpenseId` |
   * | Type | `Edm.Int32` |
   */
  ExpenseId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AuditUserId` |
   * | Type | `Edm.Int32` |
   */
  AuditUserId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityLogTypeId` |
   * | Type | `Edm.Int32` |
   */
  ActivityLogTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GlobalActivityLogId` |
   * | Type | `Edm.Int32` |
   */
  GlobalActivityLogId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityLogType` |
   * | Type | `Emr.CasePacer.Data.Entities.ActivityLogType` |
   */
  ActivityLogType?: ActivityLogType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerAuditUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerAuditUser?: CasePacerUser | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Expense` |
   * | Type | `Emr.CasePacer.Data.Entities.Expense` |
   */
  Expense?: Expense | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GlobalActivityLog` |
   * | Type | `Emr.CasePacer.Data.Entities.ActivityLog` |
   */
  GlobalActivityLog?: ActivityLog | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityHoursLogs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ActivityHoursLog)` |
   */
  ActivityHoursLogs?: Array<ActivityHoursLog>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GlobalActivityLogActivityLogs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ActivityLog)` |
   */
  GlobalActivityLogActivityLogs?: Array<ActivityLog>;
}

export type ActivityLogId = number | { ActivityLogId: number | null };

export interface EditableActivityLog
  extends Pick<
      ActivityLog,
      "EntryDate" | "ActivityDescription" | "Billable" | "BillableRate"
    >,
    Partial<
      Pick<
        ActivityLog,
        | "LawsuitId"
        | "CasePacerUserId"
        | "RelatedEntityType"
        | "RelatedEntityId"
        | "ExpenseId"
        | "AuditUserId"
        | "ActivityLogTypeId"
        | "GlobalActivityLogId"
      >
    > {}
