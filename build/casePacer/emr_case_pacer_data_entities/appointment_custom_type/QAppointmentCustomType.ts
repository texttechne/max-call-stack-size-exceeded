import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QFirm } from "../firm/QFirm";
import { QAppointment } from "../appointment/QAppointment";
import { AppointmentCustomTypeId } from "./AppointmentCustomType";

export class QAppointmentCustomType extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly Appointments = new QEntityCollectionPath(
    this.withPrefix("Appointments"),
    () => QAppointment
  );
}

export const qAppointmentCustomType = new QAppointmentCustomType();

export class QAppointmentCustomTypeId extends QId<AppointmentCustomTypeId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
