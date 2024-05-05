import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  AppointmentRecurDate,
  EditableAppointmentRecurDate,
  AppointmentRecurDateId,
} from "./AppointmentRecurDate";
import {
  QAppointmentRecurDate,
  qAppointmentRecurDate,
  QAppointmentRecurDateId,
} from "./QAppointmentRecurDate";
import { AppointmentService } from "../appointment/AppointmentService";

export class AppointmentRecurDateService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AppointmentRecurDate,
  EditableAppointmentRecurDate,
  QAppointmentRecurDate
> {
  private _Appointment?: AppointmentService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAppointmentRecurDate);
  }

  public Appointment(): AppointmentService<ClientType> {
    if (!this._Appointment) {
      const { client, path } = this.__base;
      this._Appointment = new AppointmentService(client, path, "Appointment");
    }

    return this._Appointment;
  }
}

export class AppointmentRecurDateCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AppointmentRecurDate,
  EditableAppointmentRecurDate,
  QAppointmentRecurDate,
  AppointmentRecurDateId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAppointmentRecurDate,
      new QAppointmentRecurDateId(name)
    );
  }
}
