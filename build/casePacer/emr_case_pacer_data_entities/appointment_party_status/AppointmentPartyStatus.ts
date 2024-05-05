import { AppointmentParty } from "../appointment_party/AppointmentParty";

export interface AppointmentPartyStatus {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentPartyStatusId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AppointmentPartyStatusId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentPartyStatusName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  AppointmentPartyStatusName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentParties` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.AppointmentParty)` |
   */
  AppointmentParties?: Array<AppointmentParty>;
}

export type AppointmentPartyStatusId =
  | number
  | { AppointmentPartyStatusId: number };

export interface EditableAppointmentPartyStatus
  extends Pick<AppointmentPartyStatus, "AppointmentPartyStatusName"> {}
