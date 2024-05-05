import { Firm } from "../firm/Firm";
import { ActivityLog } from "../activity_log/ActivityLog";

export interface ActivityLogType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
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
   * | Name | `TypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  TypeName: string;
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
   * | Name | `SystemTypeID` |
   * | Type | `Edm.Int32` |
   */
  SystemTypeID: number | null;
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
   * | Name | `ActivityLogSystemType` |
   * | Type | `Emr.CasePacer.Data.Entities.ActivityLogType` |
   */
  ActivityLogSystemType?: ActivityLogType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityLogs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ActivityLog)` |
   */
  ActivityLogs?: Array<ActivityLog>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityLogChildrenOfSystemType` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ActivityLogType)` |
   */
  ActivityLogChildrenOfSystemType?: Array<ActivityLogType>;
}

export type ActivityLogTypeId = number | { ActivityLogTypeId: number | null };

export interface EditableActivityLogType
  extends Pick<ActivityLogType, "TypeName">,
    Partial<Pick<ActivityLogType, "FirmId" | "SystemTypeID">> {}
