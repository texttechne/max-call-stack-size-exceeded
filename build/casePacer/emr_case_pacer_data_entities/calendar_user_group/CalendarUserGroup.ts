import { CalendarUser } from "../calendar_user/CalendarUser";

export interface CalendarUserGroup {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarUserGroupId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CalendarUserGroupId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarGroupName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  CalendarGroupName: string;
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
   * | Name | `CalendarUsers` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CalendarUser)` |
   */
  CalendarUsers?: Array<CalendarUser>;
}

export type CalendarUserGroupId = number | { CalendarUserGroupId: number };

export interface EditableCalendarUserGroup
  extends Pick<CalendarUserGroup, "CalendarGroupName" | "FirmId"> {}
