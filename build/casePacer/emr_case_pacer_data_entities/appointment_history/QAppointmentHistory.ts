import {
  QueryObject,
  QNumberPath,
  QDateTimeOffsetPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QAppointment } from "../appointment/QAppointment";
import { QCasePacerUser } from "../case_pacer_user/QCasePacerUser";
import { AppointmentHistoryId } from "./AppointmentHistory";

export class QAppointmentHistory extends QueryObject {
  public readonly AppointmentHistoryId = new QNumberPath(
    this.withPrefix("AppointmentHistoryId")
  );
  public readonly AppointmentId = new QNumberPath(
    this.withPrefix("AppointmentId")
  );
  public readonly TimeStamp = new QDateTimeOffsetPath(
    this.withPrefix("TimeStamp")
  );
  public readonly UserId = new QNumberPath(this.withPrefix("UserId"));
  public readonly Description = new QStringPath(this.withPrefix("Description"));
  public readonly Appointment = new QEntityPath(
    this.withPrefix("Appointment"),
    () => QAppointment
  );
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
}

export const qAppointmentHistory = new QAppointmentHistory();

export class QAppointmentHistoryId extends QId<AppointmentHistoryId> {
  private readonly params = [new QNumberParam("AppointmentHistoryId")];

  getParams() {
    return this.params;
  }
}
