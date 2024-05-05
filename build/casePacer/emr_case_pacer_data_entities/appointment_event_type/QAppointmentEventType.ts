import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QAppointmentEventSubType } from "../appointment_event_sub_type/QAppointmentEventSubType";
import { AppointmentEventTypeId } from "./AppointmentEventType";

export class QAppointmentEventType extends QueryObject {
  public readonly AppointmentEventTypeId = new QNumberPath(
    this.withPrefix("AppointmentEventTypeId")
  );
  public readonly AppointmentEventTypeName = new QStringPath(
    this.withPrefix("AppointmentEventTypeName")
  );
  public readonly AppointmentEventSubTypes = new QEntityCollectionPath(
    this.withPrefix("AppointmentEventSubTypes"),
    () => QAppointmentEventSubType
  );
}

export const qAppointmentEventType = new QAppointmentEventType();

export class QAppointmentEventTypeId extends QId<AppointmentEventTypeId> {
  private readonly params = [new QNumberParam("AppointmentEventTypeId")];

  getParams() {
    return this.params;
  }
}
