import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  AppointmentHistory,
  EditableAppointmentHistory,
  AppointmentHistoryId,
} from "./AppointmentHistory";
import {
  QAppointmentHistory,
  qAppointmentHistory,
  QAppointmentHistoryId,
} from "./QAppointmentHistory";
import { AppointmentService } from "../appointment/AppointmentService";
import { CasePacerUserService } from "../case_pacer_user/CasePacerUserService";

export class AppointmentHistoryService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AppointmentHistory,
  EditableAppointmentHistory,
  QAppointmentHistory
> {
  private _Appointment?: AppointmentService<ClientType>;
  private _CasePacerUser?: CasePacerUserService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAppointmentHistory);
  }

  public Appointment(): AppointmentService<ClientType> {
    if (!this._Appointment) {
      const { client, path } = this.__base;
      this._Appointment = new AppointmentService(client, path, "Appointment");
    }

    return this._Appointment;
  }

  public CasePacerUser(): CasePacerUserService<ClientType> {
    if (!this._CasePacerUser) {
      const { client, path } = this.__base;
      this._CasePacerUser = new CasePacerUserService(
        client,
        path,
        "CasePacerUser"
      );
    }

    return this._CasePacerUser;
  }
}

export class AppointmentHistoryCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AppointmentHistory,
  EditableAppointmentHistory,
  QAppointmentHistory,
  AppointmentHistoryId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAppointmentHistory,
      new QAppointmentHistoryId(name)
    );
  }
}
