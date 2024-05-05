import { Appointment } from "../appointment/Appointment";

export interface AppointmentIntegration {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
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
   * | Name | `IntegrationType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  IntegrationType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntegrationKey` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  IntegrationKey: string;
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

export type AppointmentIntegrationId =
  | number
  | { AppointmentId: number | null };

export interface EditableAppointmentIntegration
  extends Pick<AppointmentIntegration, "IntegrationType" | "IntegrationKey"> {}
