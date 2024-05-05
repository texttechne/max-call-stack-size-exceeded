import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  AppointmentCustomType,
  EditableAppointmentCustomType,
  AppointmentCustomTypeId,
} from "./AppointmentCustomType";
import {
  QAppointmentCustomType,
  qAppointmentCustomType,
  QAppointmentCustomTypeId,
} from "./QAppointmentCustomType";
import { FirmService } from "../firm/FirmService";
import { AppointmentId } from "../appointment/Appointment";
import { QAppointmentId } from "../appointment/QAppointment";
import {
  AppointmentService,
  AppointmentCollectionService,
} from "../appointment/AppointmentService";

export class AppointmentCustomTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AppointmentCustomType,
  EditableAppointmentCustomType,
  QAppointmentCustomType
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAppointmentCustomType);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
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

export class AppointmentCustomTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AppointmentCustomType,
  EditableAppointmentCustomType,
  QAppointmentCustomType,
  AppointmentCustomTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAppointmentCustomType,
      new QAppointmentCustomTypeId(name)
    );
  }
}
