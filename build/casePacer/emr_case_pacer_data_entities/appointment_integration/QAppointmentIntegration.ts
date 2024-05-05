import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QAppointment } from "../appointment/QAppointment";
import { AppointmentIntegrationId } from "./AppointmentIntegration";

export class QAppointmentIntegration extends QueryObject {
  public readonly AppointmentId = new QNumberPath(
    this.withPrefix("AppointmentId")
  );
  public readonly IntegrationType = new QStringPath(
    this.withPrefix("IntegrationType")
  );
  public readonly IntegrationKey = new QStringPath(
    this.withPrefix("IntegrationKey")
  );
  public readonly Appointment = new QEntityPath(
    this.withPrefix("Appointment"),
    () => QAppointment
  );
}

export const qAppointmentIntegration = new QAppointmentIntegration();

export class QAppointmentIntegrationId extends QId<AppointmentIntegrationId> {
  private readonly params = [new QNumberParam("AppointmentId")];

  getParams() {
    return this.params;
  }
}
