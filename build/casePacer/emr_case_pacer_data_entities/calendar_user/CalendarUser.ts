import { CalendarUserGroup } from "../calendar_user_group/CalendarUserGroup";
import { Party } from "../party/Party";

export interface CalendarUser {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarUserId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CalendarUserId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarUserGroupId` |
   * | Type | `Edm.Int32` |
   */
  CalendarUserGroupId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   */
  PartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarUserGroup` |
   * | Type | `Emr.CasePacer.Data.Entities.CalendarUserGroup` |
   */
  CalendarUserGroup?: CalendarUserGroup | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Party` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Party?: Party | null;
}

export type CalendarUserId = number | { CalendarUserId: number };

export interface EditableCalendarUser
  extends Partial<Pick<CalendarUser, "CalendarUserGroupId" | "PartyId">> {}
