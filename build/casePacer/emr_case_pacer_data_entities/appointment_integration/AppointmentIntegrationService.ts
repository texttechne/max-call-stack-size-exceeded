import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  AppointmentIntegration,
  EditableAppointmentIntegration,
  AppointmentIntegrationId,
} from "./AppointmentIntegration";
import {
  QAppointmentIntegration,
  qAppointmentIntegration,
  QAppointmentIntegrationId,
} from "./QAppointmentIntegration";
import { AppointmentService } from "../appointment/AppointmentService";

export class AppointmentIntegrationService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AppointmentIntegration,
  EditableAppointmentIntegration,
  QAppointmentIntegration
> {
  private _Appointment?: AppointmentService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAppointmentIntegration);
  }

  public Appointment(): AppointmentService<ClientType> {
    if (!this._Appointment) {
      const { client, path } = this.__base;
      this._Appointment = new AppointmentService(client, path, "Appointment");
    }

    return this._Appointment;
  }
}

export class AppointmentIntegrationCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AppointmentIntegration,
  EditableAppointmentIntegration,
  QAppointmentIntegration,
  AppointmentIntegrationId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAppointmentIntegration,
      new QAppointmentIntegrationId(name)
    );
  }
}
