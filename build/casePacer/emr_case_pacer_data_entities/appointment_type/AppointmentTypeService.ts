import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  AppointmentType,
  EditableAppointmentType,
  AppointmentTypeId,
} from "./AppointmentType";
import {
  QAppointmentType,
  qAppointmentType,
  QAppointmentTypeId,
} from "./QAppointmentType";
import { AppointmentId } from "../appointment/Appointment";
import { QAppointmentId } from "../appointment/QAppointment";
import {
  AppointmentService,
  AppointmentCollectionService,
} from "../appointment/AppointmentService";

export class AppointmentTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AppointmentType,
  EditableAppointmentType,
  QAppointmentType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAppointmentType);
  }

  public Appointments(): AppointmentCollectionService<ClientType>;
  public Appointments(id: AppointmentId): AppointmentService<ClientType>;
  public Appointments(id?: AppointmentId | undefined) {
    const fieldName = "Appointments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentCollectionService(client, path, fieldName)
      : new AppointmentService(
          client,
          path,
          new QAppointmentId(fieldName).buildUrl(id)
        );
  }
}

export class AppointmentTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AppointmentType,
  EditableAppointmentType,
  QAppointmentType,
  AppointmentTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAppointmentType,
      new QAppointmentTypeId(name)
    );
  }
}
