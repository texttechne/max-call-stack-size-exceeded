import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QAppointmentParty } from "../appointment_party/QAppointmentParty";
import { AppointmentPartyStatusId } from "./AppointmentPartyStatus";

export class QAppointmentPartyStatus extends QueryObject {
  public readonly AppointmentPartyStatusId = new QNumberPath(
    this.withPrefix("AppointmentPartyStatusId")
  );
  public readonly AppointmentPartyStatusName = new QStringPath(
    this.withPrefix("AppointmentPartyStatusName")
  );
  public readonly AppointmentParties = new QEntityCollectionPath(
    this.withPrefix("AppointmentParties"),
    () => QAppointmentParty
  );
}

export const qAppointmentPartyStatus = new QAppointmentPartyStatus();

export class QAppointmentPartyStatusId extends QId<AppointmentPartyStatusId> {
  private readonly params = [new QNumberParam("AppointmentPartyStatusId")];

  getParams() {
    return this.params;
  }
}
