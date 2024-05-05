import { Appointment } from "../appointment/Appointment";

export interface AppointmentType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AppointmentTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  AppointmentTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Appointments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Appointment)` |
   */
  Appointments?: Array<Appointment>;
}

export type AppointmentTypeId = number | { AppointmentTypeId: number };

export interface EditableAppointmentType
  extends Pick<AppointmentType, "AppointmentTypeName"> {}
