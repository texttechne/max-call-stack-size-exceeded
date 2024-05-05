import {
  QueryObject,
  QNumberPath,
  QDateTimeOffsetPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QAppointment } from "../appointment/QAppointment";
import { AppointmentRecurDateId } from "./AppointmentRecurDate";

export class QAppointmentRecurDate extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly AppointmentId = new QNumberPath(
    this.withPrefix("AppointmentId")
  );
  public readonly RecurrenceDate = new QDateTimeOffsetPath(
    this.withPrefix("RecurrenceDate")
  );
  public readonly Appointment = new QEntityPath(
    this.withPrefix("Appointment"),
    () => QAppointment
  );
}

export const qAppointmentRecurDate = new QAppointmentRecurDate();

export class QAppointmentRecurDateId extends QId<AppointmentRecurDateId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
