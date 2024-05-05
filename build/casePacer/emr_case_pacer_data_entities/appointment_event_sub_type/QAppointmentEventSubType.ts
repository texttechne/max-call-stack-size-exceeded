import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QAppointmentEventType } from "../appointment_event_type/QAppointmentEventType";
import { QAppointment } from "../appointment/QAppointment";
import { QCalendarEntry } from "../calendar_entry/QCalendarEntry";
import { QCalendarEntryRecur } from "../calendar_entry_recur/QCalendarEntryRecur";
import { AppointmentEventSubTypeId } from "./AppointmentEventSubType";

export class QAppointmentEventSubType extends QueryObject {
  public readonly AppointmentEventSubTypeId = new QNumberPath(
    this.withPrefix("AppointmentEventSubTypeId")
  );
  public readonly EventTypeId = new QNumberPath(this.withPrefix("EventTypeId"));
  public readonly AppointmentEventSubTypeName = new QStringPath(
    this.withPrefix("AppointmentEventSubTypeName")
  );
  public readonly AppointmentEventType = new QEntityPath(
    this.withPrefix("AppointmentEventType"),
    () => QAppointmentEventType
  );
  public readonly Appointments = new QEntityCollectionPath(
    this.withPrefix("Appointments"),
    () => QAppointment
  );
  public readonly CalendarEntries = new QEntityCollectionPath(
    this.withPrefix("CalendarEntries"),
    () => QCalendarEntry
  );
  public readonly CalendarEntryRecurs = new QEntityCollectionPath(
    this.withPrefix("CalendarEntryRecurs"),
    () => QCalendarEntryRecur
  );
}

export const qAppointmentEventSubType = new QAppointmentEventSubType();

export class QAppointmentEventSubTypeId extends QId<AppointmentEventSubTypeId> {
  private readonly params = [new QNumberParam("AppointmentEventSubTypeId")];

  getParams() {
    return this.params;
  }
}
