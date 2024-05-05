import { Appointment } from "../appointment/Appointment";

export interface AppointmentRecurDate {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentId` |
   * | Type | `Edm.Int32` |
   */
  AppointmentId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecurrenceDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  RecurrenceDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Appointment` |
   * | Type | `Emr.CasePacer.Data.Entities.Appointment` |
   */
  Appointment?: Appointment | null;
}

export type AppointmentRecurDateId = number | { Id: number };

export interface EditableAppointmentRecurDate
  extends Pick<AppointmentRecurDate, "RecurrenceDate">,
    Partial<Pick<AppointmentRecurDate, "AppointmentId">> {}
