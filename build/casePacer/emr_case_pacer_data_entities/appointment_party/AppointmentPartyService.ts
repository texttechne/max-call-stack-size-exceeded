import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  AppointmentParty,
  EditableAppointmentParty,
  AppointmentPartyId,
} from "./AppointmentParty";
import {
  QAppointmentParty,
  qAppointmentParty,
  QAppointmentPartyId,
} from "./QAppointmentParty";
import { AppointmentService } from "../appointment/AppointmentService";
import { AppointmentPartyStatusService } from "../appointment_party_status/AppointmentPartyStatusService";
import { PartyService } from "../party/PartyService";

export class AppointmentPartyService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AppointmentParty,
  EditableAppointmentParty,
  QAppointmentParty
> {
  private _Appointment?: AppointmentService<ClientType>;
  private _AppointmentPartyStatus?: AppointmentPartyStatusService<ClientType>;
  private _Party?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAppointmentParty);
  }

  public Appointment(): AppointmentService<ClientType> {
    if (!this._Appointment) {
      const { client, path } = this.__base;
      this._Appointment = new AppointmentService(client, path, "Appointment");
    }

    return this._Appointment;
  }

  public AppointmentPartyStatus(): AppointmentPartyStatusService<ClientType> {
    if (!this._AppointmentPartyStatus) {
      const { client, path } = this.__base;
      this._AppointmentPartyStatus = new AppointmentPartyStatusService(
        client,
        path,
        "AppointmentPartyStatus"
      );
    }

    return this._AppointmentPartyStatus;
  }

  public Party(): PartyService<ClientType> {
    if (!this._Party) {
      const { client, path } = this.__base;
      this._Party = new PartyService(client, path, "Party");
    }

    return this._Party;
  }
}

export class AppointmentPartyCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AppointmentParty,
  EditableAppointmentParty,
  QAppointmentParty,
  AppointmentPartyId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAppointmentParty,
      new QAppointmentPartyId(name)
    );
  }
}
