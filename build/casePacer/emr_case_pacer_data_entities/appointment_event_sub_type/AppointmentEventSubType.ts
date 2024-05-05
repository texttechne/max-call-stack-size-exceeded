import { AppointmentEventType } from "../appointment_event_type/AppointmentEventType";
import { Appointment } from "../appointment/Appointment";
import { CalendarEntry } from "../calendar_entry/CalendarEntry";
import { CalendarEntryRecur } from "../calendar_entry_recur/CalendarEntryRecur";

export interface AppointmentEventSubType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventSubTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AppointmentEventSubTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EventTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  EventTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventSubTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  AppointmentEventSubTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventType` |
   * | Type | `Emr.CasePacer.Data.Entities.AppointmentEventType` |
   */
  AppointmentEventType?: AppointmentEventType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Appointments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Appointment)` |
   */
  Appointments?: Array<Appointment>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarEntries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CalendarEntry)` |
   */
  CalendarEntries?: Array<CalendarEntry>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarEntryRecurs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CalendarEntryRecur)` |
   */
  CalendarEntryRecurs?: Array<CalendarEntryRecur>;
}

export type AppointmentEventSubTypeId =
  | number
  | { AppointmentEventSubTypeId: number };

export interface EditableAppointmentEventSubType
  extends Pick<
    AppointmentEventSubType,
    "EventTypeId" | "AppointmentEventSubTypeName"
  > {}
