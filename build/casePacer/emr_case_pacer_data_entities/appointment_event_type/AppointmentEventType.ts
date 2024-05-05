import { AppointmentEventSubType } from "../appointment_event_sub_type/AppointmentEventSubType";

export interface AppointmentEventType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AppointmentEventTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  AppointmentEventTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventSubTypes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.AppointmentEventSubType)` |
   */
  AppointmentEventSubTypes?: Array<AppointmentEventSubType>;
}

export type AppointmentEventTypeId =
  | number
  | { AppointmentEventTypeId: number };

export interface EditableAppointmentEventType
  extends Pick<AppointmentEventType, "AppointmentEventTypeName"> {}
