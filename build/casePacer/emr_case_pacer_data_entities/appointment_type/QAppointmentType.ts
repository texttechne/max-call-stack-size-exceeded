import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QAppointment } from "../appointment/QAppointment";
import { AppointmentTypeId } from "./AppointmentType";

export class QAppointmentType extends QueryObject {
  public readonly AppointmentTypeId = new QNumberPath(
    this.withPrefix("AppointmentTypeId")
  );
  public readonly AppointmentTypeName = new QStringPath(
    this.withPrefix("AppointmentTypeName")
  );
  public readonly Appointments = new QEntityCollectionPath(
    this.withPrefix("Appointments"),
    () => QAppointment
  );
}

export const qAppointmentType = new QAppointmentType();

export class QAppointmentTypeId extends QId<AppointmentTypeId> {
  private readonly params = [new QNumberParam("AppointmentTypeId")];

  getParams() {
    return this.params;
  }
}
