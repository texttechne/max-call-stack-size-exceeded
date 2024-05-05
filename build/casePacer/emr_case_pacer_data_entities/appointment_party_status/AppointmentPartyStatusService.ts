import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  AppointmentPartyStatus,
  EditableAppointmentPartyStatus,
  AppointmentPartyStatusId,
} from "./AppointmentPartyStatus";
import {
  QAppointmentPartyStatus,
  qAppointmentPartyStatus,
  QAppointmentPartyStatusId,
} from "./QAppointmentPartyStatus";
import { AppointmentPartyId } from "../appointment_party/AppointmentParty";
import { QAppointmentPartyId } from "../appointment_party/QAppointmentParty";
import {
  AppointmentPartyService,
  AppointmentPartyCollectionService,
} from "../appointment_party/AppointmentPartyService";

export class AppointmentPartyStatusService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AppointmentPartyStatus,
  EditableAppointmentPartyStatus,
  QAppointmentPartyStatus
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAppointmentPartyStatus);
  }

  public AppointmentParties(): AppointmentPartyCollectionService<ClientType>;
  public AppointmentParties(
    id: AppointmentPartyId
  ): AppointmentPartyService<ClientType>;
  public AppointmentParties(id?: AppointmentPartyId | undefined) {
    const fieldName = "AppointmentParties";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentPartyCollectionService(client, path, fieldName)
      : new AppointmentPartyService(
          client,
          path,
          new QAppointmentPartyId(fieldName).buildUrl(id)
        );
  }
}

export class AppointmentPartyStatusCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AppointmentPartyStatus,
  EditableAppointmentPartyStatus,
  QAppointmentPartyStatus,
  AppointmentPartyStatusId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAppointmentPartyStatus,
      new QAppointmentPartyStatusId(name)
    );
  }
}
