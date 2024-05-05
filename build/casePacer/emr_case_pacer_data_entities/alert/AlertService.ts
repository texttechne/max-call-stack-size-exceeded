import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Alert, EditableAlert, AlertId } from "./Alert";
import { QAlert, qAlert, QAlertId } from "./QAlert";
import { FirmService } from "../firm/FirmService";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { RecordService } from "../record/RecordService";
import { CasePacerUserService } from "../case_pacer_user/CasePacerUserService";

export class AlertService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Alert, EditableAlert, QAlert> {
  private _Firm?: FirmService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _Record?: RecordService<ClientType>;
  private _CasePacerUser?: CasePacerUserService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAlert);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public Record(): RecordService<ClientType> {
    if (!this._Record) {
      const { client, path } = this.__base;
      this._Record = new RecordService(client, path, "Record");
    }

    return this._Record;
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

export class AlertCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Alert,
  EditableAlert,
  QAlert,
  AlertId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAlert, new QAlertId(name));
  }
}
