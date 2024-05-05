import { Appointment } from "../appointment/Appointment";
import { CasePacerUser } from "../case_pacer_user/CasePacerUser";

export interface AppointmentHistory {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentHistoryId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AppointmentHistoryId: number;
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
   * | Name | `TimeStamp` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  TimeStamp: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserId` |
   * | Type | `Edm.Int32` |
   */
  UserId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Description: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Appointment` |
   * | Type | `Emr.CasePacer.Data.Entities.Appointment` |
   */
  Appointment?: Appointment | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
}

export type AppointmentHistoryId = number | { AppointmentHistoryId: number };

export interface EditableAppointmentHistory
  extends Pick<AppointmentHistory, "TimeStamp" | "Description">,
    Partial<Pick<AppointmentHistory, "AppointmentId" | "UserId">> {}
