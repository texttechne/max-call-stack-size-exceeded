import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  AppointmentEventType,
  EditableAppointmentEventType,
  AppointmentEventTypeId,
} from "./AppointmentEventType";
import {
  QAppointmentEventType,
  qAppointmentEventType,
  QAppointmentEventTypeId,
} from "./QAppointmentEventType";
import { AppointmentEventSubTypeId } from "../appointment_event_sub_type/AppointmentEventSubType";
import { QAppointmentEventSubTypeId } from "../appointment_event_sub_type/QAppointmentEventSubType";
import {
  AppointmentEventSubTypeService,
  AppointmentEventSubTypeCollectionService,
} from "../appointment_event_sub_type/AppointmentEventSubTypeService";

export class AppointmentEventTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AppointmentEventType,
  EditableAppointmentEventType,
  QAppointmentEventType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAppointmentEventType);
  }

  public AppointmentEventSubTypes(): AppointmentEventSubTypeCollectionService<ClientType>;
  public AppointmentEventSubTypes(
    id: AppointmentEventSubTypeId
  ): AppointmentEventSubTypeService<ClientType>;
  public AppointmentEventSubTypes(id?: AppointmentEventSubTypeId | undefined) {
    const fieldName = "AppointmentEventSubTypes";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentEventSubTypeCollectionService(client, path, fieldName)
      : new AppointmentEventSubTypeService(
          client,
          path,
          new QAppointmentEventSubTypeId(fieldName).buildUrl(id)
        );
  }
}

export class AppointmentEventTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AppointmentEventType,
  EditableAppointmentEventType,
  QAppointmentEventType,
  AppointmentEventTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAppointmentEventType,
      new QAppointmentEventTypeId(name)
    );
  }
}
