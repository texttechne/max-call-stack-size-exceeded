import { Appointment } from "../appointment/Appointment";
import { AppointmentPartyStatus } from "../appointment_party_status/AppointmentPartyStatus";
import { Party } from "../party/Party";

export interface AppointmentParty {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AppointmentPartyId: number;
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
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   */
  PartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyString` |
   * | Type | `Edm.String` |
   */
  PartyString: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentPartyStatusId` |
   * | Type | `Edm.Int32` |
   */
  AppointmentPartyStatusId: number | null;
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
   * | Name | `AppointmentPartyStatus` |
   * | Type | `Emr.CasePacer.Data.Entities.AppointmentPartyStatus` |
   */
  AppointmentPartyStatus?: AppointmentPartyStatus | null;
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

export type AppointmentPartyId = number | { AppointmentPartyId: number };

export interface EditableAppointmentParty
  extends Partial<
    Pick<
      AppointmentParty,
      "AppointmentId" | "PartyId" | "PartyString" | "AppointmentPartyStatusId"
    >
  > {}
