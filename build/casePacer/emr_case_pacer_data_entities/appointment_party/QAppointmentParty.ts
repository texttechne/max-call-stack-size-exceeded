import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QAppointment } from "../appointment/QAppointment";
import { QAppointmentPartyStatus } from "../appointment_party_status/QAppointmentPartyStatus";
import { QParty } from "../party/QParty";
import { AppointmentPartyId } from "./AppointmentParty";

export class QAppointmentParty extends QueryObject {
  public readonly AppointmentPartyId = new QNumberPath(
    this.withPrefix("AppointmentPartyId")
  );
  public readonly AppointmentId = new QNumberPath(
    this.withPrefix("AppointmentId")
  );
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly PartyString = new QStringPath(this.withPrefix("PartyString"));
  public readonly AppointmentPartyStatusId = new QNumberPath(
    this.withPrefix("AppointmentPartyStatusId")
  );
  public readonly Appointment = new QEntityPath(
    this.withPrefix("Appointment"),
    () => QAppointment
  );
  public readonly AppointmentPartyStatus = new QEntityPath(
    this.withPrefix("AppointmentPartyStatus"),
    () => QAppointmentPartyStatus
  );
  public readonly Party = new QEntityPath(
    this.withPrefix("Party"),
    () => QParty
  );
}

export const qAppointmentParty = new QAppointmentParty();

export class QAppointmentPartyId extends QId<AppointmentPartyId> {
  private readonly params = [new QNumberParam("AppointmentPartyId")];

  getParams() {
    return this.params;
  }
}
